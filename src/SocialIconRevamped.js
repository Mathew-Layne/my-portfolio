export default function SocialIconRevamped() {
  return (
    <div className="fixed right-16 top-0 h-full flex flex-col justify-center items-end pr-4 ">
      <div className="flex flex-col gap-4 border border-gray-300 py-3 px-1 rounded-full">
        <div className="relative group">
          <div className="hidden group-hover:block absolute right-10 top-1/2 -translate-y-1/2 px-2 py-1 bg-zinc-600  text-white rounded shadow">
            Instagram
          </div>
          <i className="fab fa-instagram text-gray-300 text-xl hover:text-teal-400 p-2"></i>
        </div>

        <div className="relative group">
          <div className="hidden group-hover:block absolute right-10 top-1/2 -translate-y-1/2 px-2 py-1 bg-zinc-600  text-white rounded shadow">
            Gmail
          </div>
          <i class="fa-regular fa-envelope text-gray-300 text-xl hover:text-teal-400 p-2"></i>
        </div>

        <div className="relative group">
          <div className="hidden group-hover:block absolute right-10 top-1/2 -translate-y-1/2 px-2 py-1 bg-zinc-600  text-white rounded shadow">
            LinkedIn
          </div>
          <i class="fa-brands fa-linkedin-in text-gray-300 text-xl hover:text-teal-400 p-2"></i>
        </div>

        <div className="relative group">
          <div className="hidden group-hover:block absolute right-10 top-1/2 -translate-y-1/2 px-2 py-1 bg-zinc-600  text-white rounded shadow">
            GitHub
          </div>
          <i class="fa-brands fa-github text-gray-300 text-xl hover:text-teal-400 p-2"></i>
        </div>

        <div className="relative group">
          <div className="hidden group-hover:block absolute right-10 top-1/2 -translate-y-1/2 px-2 py-1 bg-zinc-600  text-white rounded shadow">
            Phone
          </div>
          <i className="fa-regular fa-phone text-gray-300 text-xl hover:text-teal-400 p-2"></i>
        </div>
      </div>
    </div>
  );
}
