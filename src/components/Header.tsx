import { Link } from "react-router-dom"
import { FiArrowRight, FiArrowLeft } from "react-icons/fi"

export function Header(props: { text: string }) {
  if (props.text === "books") {
    return (
      <div className="w-full mt-3">
        <h1 className="text-4xl text-center">
          {import.meta.env.VITE_APP_TITLE_BOOKS}
        </h1>
        <div className="w-full px-10 flex justify-end">
          <Link
            type="button"
            className="w-[130px] h-10 m-0 border border-violet-800 font-semibold rounded-lg px-6 
          py-4 flex items-center gap-3 hover:border-violet-500"
            to="/movies"
          >
            Movies
            <FiArrowRight size={20} className="text-violet-500" />
          </Link>
        </div>
      </div>
    )
  } else {
    return (
      <div className="w-full mt-3">
        <h1 className="text-4xl text-center">
          {import.meta.env.VITE_APP_TITLE_MOVIES}
        </h1>
        <div className="w-full px-10 flex justify-start">
          <Link
            type="button"
            className="w-30 h-10 border border-violet-800 font-semibold rounded-lg px-6 
          py-4 flex items-center gap-3 hover:border-violet-500"
            to="/"
          >
            <FiArrowLeft size={20} className="text-violet-500" />
            Books
          </Link>
        </div>
      </div>
    )
  }
}
