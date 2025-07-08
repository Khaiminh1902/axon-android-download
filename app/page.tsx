// pages/index.tsx
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <title>Download Axon Chat App</title>
        <meta
          name="description"
          content="Install the Axon chat app on your Android device."
        />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center p-6 text-gray-900">
        <h1 className="text-4xl font-bold mb-6 text-white">
          Download <span className="text-[#4ADE80]">Axon</span>
        </h1>

        <a
          href="https://expo.dev/artifacts/eas/3SZJW9fnaq83LFdHgjHkW2.apk" // Direct APK download URL from your build
          className="bg-[#4ADE80] hover:bg-[#4ade80cf] text-white px-6 py-3 rounded-xl text-lg font-semibold mb-4"
          download
        >
          📥 Download for Android
        </a>

        <div className="max-w-lg text-left text-base bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2">
            📲 How to Install on Android
          </h2>
          <ol className="list-decimal ml-5 space-y-2">
            <li>Tap the download button above to get the APK file.</li>
            <li>When prompted, allow your browser to download unknown apps.</li>
            <li>Once downloaded, open the APK file.</li>
            <li>
              If needed, go to{" "}
              <strong>Settings → Security → Install unknown apps</strong> and
              allow your browser or file manager.
            </li>
            <li>
              Tap <strong>Install</strong> and open the Axon chat app!
            </li>
          </ol>
        </div>

        <p className="text-sm text-gray-400 mt-6">
          Having issues? Contact support at{" "}
          <a
            className="text-[#4ADE80]"
            href="mailto:axon.neighborhood@gmail.com"
          >
            axon.neighborhood@gmail.com
          </a>
        </p>
      </main>
    </div>
  );
}
