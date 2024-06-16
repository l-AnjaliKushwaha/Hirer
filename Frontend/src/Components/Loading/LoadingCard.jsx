import React from "react";

const LoadingCard = () => {
  return (
    <div>
      <div className={`m-2 w-80 mb-5 p-4 shrink-0 rounded-xl border shadow`}>
        <div className="animate-pulse">
          <div className="flex items-center justify-between ">
            <div className="h-2 w-1/3 bg-slate-200 rounded-full"></div>
          </div>

          <div className="flex py-6 space-x-4">
            <div class="flex-1 space-y-4 py-1">
              <div class="h-2 bg-slate-200 rounded"></div>
              <div class="space-y-3">
                <div class="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
            <div class="rounded-full bg-slate-200 h-10 w-10"></div>
          </div>

          <div className="py-2 space-y-2">
            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
      <div className={`m-2 w-80 mb-5 p-4 shrink-0 rounded-xl border shadow`}>
        <div className="animate-pulse">
          <div className="flex items-center justify-between ">
            <div className="h-2 w-1/3 bg-slate-200 rounded-full"></div>
          </div>

          <div className="flex py-6 space-x-4">
            <div class="flex-1 space-y-4 py-1">
              <div class="h-2 bg-slate-200 rounded"></div>
              <div class="space-y-3">
                <div class="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
            <div class="rounded-full bg-slate-200 h-10 w-10"></div>
          </div>

          <div className="py-2 space-y-2">
            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
      <div className={`m-2 w-80 mb-5 p-4 shrink-0 rounded-xl border shadow`}>
        <div className="animate-pulse">
          <div className="flex items-center justify-between ">
            <div className="h-2 w-1/3 bg-slate-200 rounded-full"></div>
          </div>

          <div className="flex py-6 space-x-4">
            <div class="flex-1 space-y-4 py-1">
              <div class="h-2 bg-slate-200 rounded"></div>
              <div class="space-y-3">
                <div class="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
            <div class="rounded-full bg-slate-200 h-10 w-10"></div>
          </div>

          <div className="py-2 space-y-2">
            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
