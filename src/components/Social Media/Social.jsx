const Social = () => {
  return (
    <div>
      <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl pecham">
            Social Media
          </h2>
          <p className="max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed space">
            Explore my social media presence and see how I leverage design to
            create engaging and visually appealing content.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src="/placeholder.svg"
            width={400}
            height={400}
            alt="Social Media"
            className="object-cover w-full rounded-lg aspect-square"
          />
          <img
            src="/placeholder.svg"
            width={400}
            height={400}
            alt="Social Media"
            className="object-cover w-full rounded-lg aspect-square"
          />
          <img
            src="/placeholder.svg"
            width={400}
            height={400}
            alt="Social Media"
            className="object-cover w-full rounded-lg aspect-square"
          />
          <img
            src="/placeholder.svg"
            width={400}
            height={400}
            alt="Social Media"
            className="object-cover w-full rounded-lg aspect-square"
          />
          <img
            src="/placeholder.svg"
            width={400}
            height={400}
            alt="Social Media"
            className="object-cover w-full rounded-lg aspect-square"
          />
          <img
            src="/placeholder.svg"
            width={400}
            height={400}
            alt="Social Media"
            className="object-cover w-full rounded-lg aspect-square"
          />
        </div>
      </div>
    </div>
  );
};

export default Social;
