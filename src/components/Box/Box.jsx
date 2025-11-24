import React from 'react'

const Box = () => {
  return (
    <div className="px-6 pt-6 pb-11 rounded-2xl bg-slate-600 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-4 max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl text-cyan-100 leading-[52.2px] max-md:max-w-full pecham">
              Infographic Design
            </div>
            <div className="flex flex-col justify-center self-end mt-12 max-w-full rounded-2xl bg-zinc-600 w-[323px] max-md:mt-10">
              <div className="shrink-0 bg-white h-[242px]" />
            </div>
            <div className="flex flex-col justify-center mt-5 rounded-2xl bg-zinc-600 max-md:max-w-full">
              <div className="shrink-0 bg-white h-[335px] max-md:max-w-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-lg leading-7 text-white max-md:mt-10 max-md:max-w-full">
            <div className="shrink-0 bg-white rounded-2xl h-[460px] max-md:max-w-full" />
            <div className="flex flex-col pr-11 pl-5 mt-12 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-xs leading-4 max-md:max-w-full space">
                Concept, Design, 3D, Webflow+WebGL Development
              </div>
              <div className="mt-6 leading-[144%] max-md:max-w-full space">
                We immersed ourselves in a 3D world we created to explain how
              </div>
              <div className="mt-2 max-md:max-w-full space">
                Cula's platform collects data from carbon removal processes and
              </div>
              <div className="mt-2 max-md:max-w-full space">
                converts them into carbon credit certificates.
              </div>
              <div className="flex gap-5 self-start px-6 py-3 mt-10 text-sm text-black bg-purple-50 rounded-[500px] max-md:px-5 space">
                <div>See All Designs</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/08310c0ed16bb06fb24b6eeabacfce213e250344e18c8132298cfd1505926fde?"
                  className="shrink-0 my-auto aspect-square w-[11px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Box