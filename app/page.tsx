// pages/index.tsx
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Download Axon Chat App</title>
        <meta
          name="description"
          content="Install the Axon chat app on your Android device."
        />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100 text-gray-900">
        <h1 className="text-4xl font-bold mb-6">
          Download <span className="text-blue-600">Axon</span>
        </h1>

        <a
          href="https://expo.dev/artifacts/eas/qQDgsoCszD1fPredcJwoU9.apk" // Direct APK download URL from your build
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold mb-4"
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

        <p className="text-sm text-gray-600 mt-6">
          Having issues? Contact support at{" "}
          <a className="text-blue-600" href="mailto:support@axonchat.com">
            support@axonchat.com
          </a>
        </p>
      </main>
    </>
  );
}
