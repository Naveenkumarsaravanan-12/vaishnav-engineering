"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  Loader2,
  AlertCircle,
  FileText,
  ExternalLink
} from "lucide-react";

interface CustomPdfViewerProps {
  src: string;
  title?: string;
  className?: string;
  height?: string;
}

export default function CustomPdfViewer({
  src,
  title = "Document Preview",
  className = "",
  height = "h-[550px] sm:h-[650px] lg:h-[750px]"
}: CustomPdfViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);
  const renderTasksRef = useRef<{ [key: number]: any }>({});
  
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [pdfDoc, setPdfDoc] = useState<any>(null);

  // Clean & validate file URL (allow relative paths or HTTPS; block dangerous schemes like javascript:, data:, etc.)
  const isSafeProtocol = typeof src === "string" && (
    src.startsWith("/") || 
    src.startsWith("https://")
  ) && !src.toLowerCase().startsWith("javascript:") && !src.toLowerCase().startsWith("data:");

  const cleanSrc = isSafeProtocol ? src.split("#")[0] : "";

  // Load PDF Document
  useEffect(() => {
    if (!cleanSrc) {
      setError("Invalid or unsupported document path.");
      setLoading(false);
      return;
    }

    let isCancelled = false;
    setLoading(true);
    setError(null);

    async function loadPdfDocument() {
      try {
        // Load PDF.js dynamically in browser only, bypassing webpack SSR bundling and TS module resolution
        const loadModule = new Function("url", "return import(url)");
        const pdfjs: any = await loadModule("/pdfjs/pdf.min.mjs");
        pdfjs.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.mjs";

        const loadingTask = pdfjs.getDocument({
          url: cleanSrc,
          cMapUrl: "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/cmaps/",
          cMapPacked: true,
          isEvalSupported: false, // Security hardening: disable arbitrary script/eval in PDF font/content parser
        });

        const doc = await loadingTask.promise;
        if (!isCancelled) {
          setPdfDoc(doc);
          setNumPages(doc.numPages);
          setCurrentPage(1);
          setLoading(false);
        }
      } catch (err: any) {
        if (!isCancelled) {
          console.error("PDF loading error:", err);
          setError("Failed to load PDF document. Please use the button below to open directly.");
          setLoading(false);
        }
      }
    }

    loadPdfDocument();

    return () => {
      isCancelled = true;
      Object.values(renderTasksRef.current).forEach((task) => {
        try {
          task?.cancel();
        } catch {
          // Ignore
        }
      });
      renderTasksRef.current = {};
    };
  }, [cleanSrc]);

  // Render Pages onto Canvases
  const renderPages = useCallback(async () => {
    if (!pdfDoc || numPages === 0) return;

    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;

    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      try {
        if (renderTasksRef.current[pageNum]) {
          try {
            renderTasksRef.current[pageNum].cancel();
          } catch {
            // Task already done
          }
        }

        const page = await pdfDoc.getPage(pageNum);
        const canvas = canvasRefs.current[pageNum - 1];
        if (!canvas) continue;

        const viewport = page.getViewport({ scale: scale * dpr });
        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) continue;

        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.style.width = `${viewport.width / dpr}px`;
        canvas.style.height = `${viewport.height / dpr}px`;

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const renderContext = {
          canvasContext: ctx,
          viewport: viewport,
        };

        const renderTask = page.render(renderContext);
        renderTasksRef.current[pageNum] = renderTask;

        await renderTask.promise;
      } catch (err: any) {
        if (err?.name !== "RenderingCancelledException") {
          console.warn(`Error rendering page ${pageNum}:`, err);
        }
      }
    }
  }, [pdfDoc, numPages, scale]);

  useEffect(() => {
    renderPages();
  }, [renderPages]);

  // Track current page based on scroll position
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const containerTop = scrollContainerRef.current.scrollTop;
    let closestPage = 1;
    let minDistance = Infinity;

    canvasRefs.current.forEach((canvas, idx) => {
      if (!canvas) return;
      const distance = Math.abs(canvas.offsetTop - containerTop - 40);
      if (distance < minDistance) {
        minDistance = distance;
        closestPage = idx + 1;
      }
    });

    setCurrentPage(closestPage);
  };

  const scrollToPage = (pageNum: number) => {
    const targetIdx = Math.max(0, Math.min(pageNum - 1, numPages - 1));
    const targetCanvas = canvasRefs.current[targetIdx];
    if (targetCanvas && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: targetCanvas.offsetTop - 20,
        behavior: "smooth"
      });
      setCurrentPage(targetIdx + 1);
    }
  };

  const zoomIn = () => setScale((s) => Math.min(s + 0.15, 2.2));
  const zoomOut = () => setScale((s) => Math.max(s - 0.15, 0.6));
  const resetZoom = () => setScale(1.1);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`rounded-2xl overflow-hidden border border-[#39434D]/20 bg-[#1A222A] text-[#F8F7F2] shadow-inner flex flex-col w-full relative ${
        isFullscreen ? "fixed inset-0 z-50 rounded-none h-screen" : height
      } ${className}`}
    >
      {/* Custom Clean Top Control Bar - NO browser drawing/annotation/print/save toolbar */}
      <div className="flex flex-wrap items-center justify-between px-3 sm:px-4 py-2.5 bg-[#101820] border-b border-[#39434D]/30 text-xs gap-2 shrink-0 select-none">
        {/* Left: Document Title */}
        <div className="flex items-center gap-2 max-w-[200px] sm:max-w-xs md:max-w-md truncate">
          <FileText className="h-4 w-4 text-[#D6B36A] shrink-0" />
          <span className="font-heading font-bold text-white text-[11px] sm:text-xs truncate">
            {title}
          </span>
        </div>

        {/* Center: Clean Page Navigation */}
        {numPages > 0 && (
          <div className="flex items-center gap-1.5 bg-[#1A222A] px-2.5 py-1 rounded-lg border border-[#39434D]/40">
            <button
              type="button"
              onClick={() => scrollToPage(currentPage - 1)}
              disabled={currentPage <= 1}
              className="p-1 hover:text-[#D6B36A] disabled:opacity-30 disabled:hover:text-white transition cursor-pointer"
              title="Previous Page"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
            <span className="font-mono text-[11px] font-bold text-[#D6B36A] px-1">
              Page {currentPage} of {numPages}
            </span>
            <button
              type="button"
              onClick={() => scrollToPage(currentPage + 1)}
              disabled={currentPage >= numPages}
              className="p-1 hover:text-[#D6B36A] disabled:opacity-30 disabled:hover:text-white transition cursor-pointer"
              title="Next Page"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        {/* Right: Clean Zoom Controls & Fullscreen */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={zoomOut}
            disabled={scale <= 0.6}
            className="p-1.5 rounded-lg bg-[#1A222A] hover:bg-[#202A33] hover:text-[#D6B36A] border border-[#39434D]/40 disabled:opacity-30 transition cursor-pointer"
            title="Zoom Out"
          >
            <ZoomOut className="h-3.5 w-3.5" />
          </button>

          <button
            type="button"
            onClick={resetZoom}
            className="px-2 py-1 rounded-lg bg-[#1A222A] hover:bg-[#202A33] hover:text-[#D6B36A] border border-[#39434D]/40 font-mono text-[10.5px] font-bold text-[#E5E8EB] transition cursor-pointer"
            title="Reset Zoom to 100%"
          >
            {Math.round(scale * 100)}%
          </button>

          <button
            type="button"
            onClick={zoomIn}
            disabled={scale >= 2.2}
            className="p-1.5 rounded-lg bg-[#1A222A] hover:bg-[#202A33] hover:text-[#D6B36A] border border-[#39434D]/40 disabled:opacity-30 transition cursor-pointer"
            title="Zoom In"
          >
            <ZoomIn className="h-3.5 w-3.5" />
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-1.5 ml-1 rounded-lg bg-[#1A222A] hover:bg-[#202A33] hover:text-[#D6B36A] border border-[#39434D]/40 transition cursor-pointer hidden sm:inline-flex"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Viewer"}
          >
            {isFullscreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Canvas Scroll Area */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-auto p-4 sm:p-6 bg-[#26313C] flex flex-col items-center gap-6"
      >
        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center m-auto py-16 gap-3 text-center">
            <Loader2 className="h-8 w-8 text-[#D6B36A] animate-spin" />
            <p className="font-heading text-sm font-semibold text-white">
              Rendering High-Definition Document...
            </p>
            <p className="text-xs text-[#89939D] font-mono">
              Loading official certified pages
            </p>
          </div>
        )}

        {/* Error Fallback */}
        {error && !loading && (
          <div className="flex flex-col items-center justify-center m-auto p-6 max-w-md text-center bg-[#101820] rounded-2xl border border-red-500/30 gap-3">
            <AlertCircle className="h-8 w-8 text-amber-400" />
            <p className="text-sm font-bold text-white">{error}</p>
            <a
              href={cleanSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-[#D6B36A] text-[#101820] font-bold text-xs rounded-xl hover:bg-[#C4A055] transition shadow-xs"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Open Document Directly</span>
            </a>
          </div>
        )}

        {/* Document Pages Container */}
        {!loading && !error && numPages > 0 && (
          Array.from({ length: numPages }, (_, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform duration-200"
            >
              <div className="relative shadow-2xl rounded-sm overflow-hidden bg-white border border-[#39434D]/40">
                <canvas
                  ref={(el) => {
                    canvasRefs.current[index] = el;
                  }}
                  className="block bg-white"
                />
              </div>
              <span className="text-[10px] font-mono font-semibold text-[#89939D] mt-1.5">
                Page {index + 1}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
