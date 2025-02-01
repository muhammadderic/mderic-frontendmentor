import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { challenges } from "./challenges";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 border border-red-500">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header section */}
        <div className="pt-8 pb-4 border-b border-gray-200 text-center">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            My Frontend Mentor Challenges
          </h1>
          <div className="w-full flex">
            <div className="mt-3 mx-auto flex flex-col sm:flex-row sm:items-center text-gray-600">
              <p className="text-sm">
                Built by <span className="font-medium text-gray-800">muhammadderic</span>
              </p>
              <span className="hidden sm:inline mx-2">•</span>
              <a
                href="https://github.com/muhammadderic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-red-900 transition-colors flex items-center mt-1 sm:mt-0"
              >
                github.com/muhammadderic
                <ArrowRight className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Challenges grid */}
        <div className="space-y-10">
          {Object.entries(challenges).map(([level, items]) => (
            <div key={level} className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 capitalize border-l-4 border-gray-800 pl-3">
                {level} Challenges
              </h2>
              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((challenge) => (
                  <Link
                    key={challenge.path}
                    to={challenge.path}
                    className="group block rounded-lg border border-gray-200 bg-white p-5 shadow-sm 
                             hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                        {challenge.title}
                      </span>
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                        <ArrowRight className="w-4 h-4 text-gray-600" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-8 mt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Muhammad Deric - Frontend Mentor Challenges • Built with React & Tailwind</p>
        </div>
      </div>
    </div>
  );
}
