import { BackButton } from "../../../core/BackButton";
import qrCodeImg from "./image-qr-code.png";

export default function QRCode() {
  return (
    <div className="min-h-screen bg-[hsl(212,45%,89%)] font-sans p-4">
      <div>
        <BackButton to="/" />
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        {/* Card */}
        <div className="bg-white rounded-xl shadow-md p-4 w-[260px] sm:w-[300px] text-center">
          <img
            src={qrCodeImg}
            alt="QR code to frontendmentor.io"
            className="w-full rounded-lg"
          />

          <div className="px-2 pb-4">
            <h1 className="text-lg sm:text-xl font-bold text-[hsl(218,44%,22%)] mt-4">
              Improve your front-end skills by building projects
            </h1>

            <p className="text-sm text-[hsl(220,15%,55%)] mt-2">
              Scan the QR code to visit Frontend Mentor and take your coding skills
              to the next level
            </p>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-6 text-xs text-center text-gray-600">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://github.com/muhammadderic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            muhammadderic
          </a>
          .
        </div>
      </div>
    </div>
  );
}
