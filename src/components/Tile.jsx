export function MyComponent() {
    return (
      <div className="flex flex-col pb-5 border border-cyan-700 border-solid shadow-sm bg-neutral-800 max-w-[415px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5663e2415515fae8f5d198866c20f31e987109d69e99c3c3d0718afaa8c421b5?"
          className="w-full aspect-[2.17]"
        />
        <div className="flex flex-col items-start pr-14 pl-4 mt-6 w-full">
          <div className="text-xl leading-7 text-cyan-100">
            Infographic Design
          </div>
          <div className="mt-5 text-base leading-6 text-gray-400">
            A clean and informative infographic
            <br />
            design for a sustainability report.
          </div>
        </div>
      </div>
    );
  }
  
  