import * as React from "react";
import profile from "../images/profile_2000.jpg";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  const handleButtonClick = () => {
    window.location.href = 'mailto:nic@2limes.com';
  };

  return (
    <main className="bg-gray-100">
      <div className="container mx-auto py-10 px-5 md:px-0">
        <div className="bg-white shadow-md rounded-lg p-10">
          <div className="flex flex-col md:flex-row items-center mb-10">
            <img
              className="rounded-full h-40 w-40 mb-5 md:mb-0 md:mr-10"
              src={profile}
              alt="Nicholas Schlueter"
            />
            <div>
              <h1 className="text-3xl font-bold mb-2">Nicholas Schlueter</h1>
              <h2 className="text-xl text-gray-600 mb-5">
                iOS Developer since 2008
              </h2>
              <p className="mb-5">
                As an experienced iOS developer, I can help build or improve your app.
              </p>
              <button onClick={handleButtonClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Hire me
              </button>
            </div>
          </div>
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-2">Skills</h3>
            <p>
              iOS and tvOS development, Technical team lead, Technical
              mentorship, Software specifications and estimates
            </p>
          </div>
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-2">Languages / Concepts</h3>
            <p>
              Swift, Objective C, Ruby, JavaScript, Python, GraphQL, CSS, Html,
              reactive programming, client server networking, multithreading
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Apple Frameworks</h3>
            <p>
              UIKit, SwiftUI, Combine, AVFoundation, SpeechKit, AutoLayout,
              SafariServices, CoreImage, MapKit, CoreLocation, StoreKit
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
