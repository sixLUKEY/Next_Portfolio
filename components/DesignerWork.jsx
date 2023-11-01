import React from "react";
import Image from "next/image";

function DesignerWork() {
  return (
    <section className="flex gap-3 my-5 relative">
      <p className="text-primary text-3xl absolute -top-[12.5%] left-0 heartFigma">" <span className="text-secondary">I heart Figma</span> "</p>
      <div className="flex-[5] border border-accent p-2 rounded-sm">
        <div className="w-full h-full relative">
          <Image
            src={"https://i.postimg.cc/XJPvGKKj/Rectangle-72.jpg"}
            alt="marlboro"
            fill={true}
            className="rounded-sm"
          />
        </div>
      </div>
      <div className="flex-[4] flex flex-col gap-3 h-64 max-h-64">
        <select
          name="designs"
          id="designs"
          className="flex-1 border border-accent bg-dark text-white text-4xl px-2 rounded-sm"
        >
          <option value="marlboro">Marlboro red Beyond</option>
        </select>
        <div className="flex-[4] flex gap-3">
          <div className="flex-[5] border border-accent rounded-sm p-2">
            <div className="w-full h-full relative">
              <Image
                src={
                  "https://i.postimg.cc/05f83nVW/Screenshot-2023-10-06-114501-1.jpg"
                }
                alt="marlboro 2"
                fill={true}
                className="rounded-sm"
              />
            </div>
          </div>
          <div className="flex-[4] flex flex-col gap-3">
            <div className="flex-[4] border border-accent rounded-sm p-2">
              <div className="w-full h-full relative">
                <Image
                  src={
                    "https://i.postimg.cc/8zcxZBY6/Screenshot-2023-10-06-114645-1.jpg"
                  }
                  alt="marlboro 3"
                  fill={true}
                  className="rounded-sm"
                />
              </div>
            </div>
            <div className="flex-1 border border-accent rounded-sm flex items-center justify-between px-2 transition hover:text-white hover:bg-primaryalt hover:border-primary group cursor-pointer">
              <p className="text-secondary transition text-xl group-hover:text-white">
                Full design here
              </p>
              <div className="relative overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className=" group-hover:translate-x-3 group-hover:-translate-y-3 transition"
                >
                  <path
                    d="M11.9199 0.62C11.8185 0.375651 11.6243 0.181475 11.3799 0.0799999C11.2597 0.028759 11.1306 0.00157999 10.9999 0H0.999939C0.734722 0 0.480369 0.105357 0.292832 0.292893C0.105296 0.48043 -6.10352e-05 0.734784 -6.10352e-05 1C-6.10352e-05 1.26522 0.105296 1.51957 0.292832 1.70711C0.480369 1.89464 0.734722 2 0.999939 2H8.58994L0.289939 10.29C0.196211 10.383 0.121816 10.4936 0.0710478 10.6154C0.0202791 10.7373 -0.00585938 10.868 -0.00585938 11C-0.00585938 11.132 0.0202791 11.2627 0.0710478 11.3846C0.121816 11.5064 0.196211 11.617 0.289939 11.71C0.382902 11.8037 0.493503 11.8781 0.615362 11.9289C0.737221 11.9797 0.867927 12.0058 0.999939 12.0058C1.13195 12.0058 1.26266 11.9797 1.38452 11.9289C1.50638 11.8781 1.61698 11.8037 1.70994 11.71L9.99994 3.41V11C9.99994 11.2652 10.1053 11.5196 10.2928 11.7071C10.4804 11.8946 10.7347 12 10.9999 12C11.2652 12 11.5195 11.8946 11.707 11.7071C11.8946 11.5196 11.9999 11.2652 11.9999 11V1C11.9984 0.869323 11.9712 0.740222 11.9199 0.62Z"
                    fill="#ffff"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="absolute inset-0 group-hover:translate-x-0 group-hover:-translate-y-0 -translate-x-3 translate-y-3 transition"
                >
                  <path
                    d="M11.9199 0.62C11.8185 0.375651 11.6243 0.181475 11.3799 0.0799999C11.2597 0.028759 11.1306 0.00157999 10.9999 0H0.999939C0.734722 0 0.480369 0.105357 0.292832 0.292893C0.105296 0.48043 -6.10352e-05 0.734784 -6.10352e-05 1C-6.10352e-05 1.26522 0.105296 1.51957 0.292832 1.70711C0.480369 1.89464 0.734722 2 0.999939 2H8.58994L0.289939 10.29C0.196211 10.383 0.121816 10.4936 0.0710478 10.6154C0.0202791 10.7373 -0.00585938 10.868 -0.00585938 11C-0.00585938 11.132 0.0202791 11.2627 0.0710478 11.3846C0.121816 11.5064 0.196211 11.617 0.289939 11.71C0.382902 11.8037 0.493503 11.8781 0.615362 11.9289C0.737221 11.9797 0.867927 12.0058 0.999939 12.0058C1.13195 12.0058 1.26266 11.9797 1.38452 11.9289C1.50638 11.8781 1.61698 11.8037 1.70994 11.71L9.99994 3.41V11C9.99994 11.2652 10.1053 11.5196 10.2928 11.7071C10.4804 11.8946 10.7347 12 10.9999 12C11.2652 12 11.5195 11.8946 11.707 11.7071C11.8946 11.5196 11.9999 11.2652 11.9999 11V1C11.9984 0.869323 11.9712 0.740222 11.9199 0.62Z"
                    fill="#F99909"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignerWork;
