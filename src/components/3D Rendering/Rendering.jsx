const Rendering = () => {
  return (
    <div>
      <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
        <div className="space-y-3">
          <div className="text-container">
            <span className="text-3xl font-bold tracking-tighter sm:text-5xl monument">
              3
              <span className="text-3xl font-bold tracking-tighter sm:text-5xl pecham">
                D Rendering
              </span>
            </span>
          </div>

          <p className="max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed space">
            Discover my 3D rendering skills, where I bring digital concepts to
            life with stunning visuals and attention to detail.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="/placeholder.svg"
              width={400}
              height={400}
              alt="Branding"
              className="object-cover w-full rounded-lg aspect-square"
            />
            <img
              src="/placeholder.svg"
              width={400}
              height={400}
              alt="Branding"
              className="object-cover w-full rounded-lg aspect-square"
            />
            <img
              src="/placeholder.svg"
              width={400}
              height={400}
              alt="Branding"
              className="object-cover w-full rounded-lg aspect-square"
            />
            <img
              src="/placeholder.svg"
              width={400}
              height={400}
              alt="Branding"
              className="object-cover w-full rounded-lg aspect-square"
            />
            <img
              src="/placeholder.svg"
              width={400}
              height={400}
              alt="Branding"
              className="object-cover w-full rounded-lg aspect-square"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="w-full aspect-square rounded-lg" />
          <div className="w-full aspect-square rounded-lg" />
          <div className="w-full aspect-square rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Rendering;
