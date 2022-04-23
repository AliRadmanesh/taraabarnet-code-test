import React from "react";

const About = () => {
  const IMAGE_URL =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Bust_of_Satoshi_Nakamoto_in_Budapest.jpg/360px-Bust_of_Satoshi_Nakamoto_in_Budapest.jpg";
  const TITLE = "Satoshi Nakamoto";
  const TITLE2 = "Development of bitcoin";
  const DESCRIPTION =
    "Satoshi Nakamoto is the name used by the presumed pseudonymous person or persons who developed bitcoin, authored the bitcoin white paper, and created and deployed bitcoin's original reference implementation. As part of the implementation, Nakamoto also devised the first blockchain database. Nakamoto was active in the development of bitcoin up until December 2010. Many people have or have been claimed to be Nakamoto.";
  const DESCRIPTION2 = `Nakamoto stated that work on the writing of the code for bitcoin began in 2007. On 18 August 2008, he or a colleague registered the domain name bitcoin.org, and created a web site at that address. On 31 October, Nakamoto published a white paper on the cryptography mailing list at metzdowd.com describing a digital cryptocurrency, titled "Bitcoin: A Peer-to-Peer Electronic Cash System".
  
    On 9 January 2009, Nakamoto released version 0.1 of the bitcoin software on SourceForge, and launched the network by defining the genesis block of bitcoin (block number 0), which had a reward of 50 bitcoins. Embedded in the coinbase transaction of this block is the text: "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks", citing a headline in the UK newspaper The Times published on that date.[18] This note has been interpreted as both a timestamp and a derisive comment on the alleged instability caused by fractional-reserve banking.
    
    Nakamoto continued to collaborate with other developers on the bitcoin software until mid-2010, making all modifications to the source code himself. He then gave control of the source code repository and network alert key to Gavin Andresen, transferred several related domains to various prominent members of the bitcoin community, and stopped his recognized involvement in the project.[citation needed]
    
    Nakamoto owns between 750,000 and 1,100,000 bitcoin. As of November 2021, that puts his net worth at up to 73 billion US dollars, which would make him the 15th-richest person in the world.`;

  return (
    <div className="container mx-auto px-4 xl:px-0 mb-4 flex flex-col items-center lg:flex-row lg:items-start">
      <img
        className="rounded-lg max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
        src={IMAGE_URL}
        alt="Bust of Satoshi Nakamoto in Budapest"
      />
      <div className="ml-4 mt-4 lg:mt-0 flex flex-col items-center lg:items-start">
        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {TITLE}
        </h5>
        <p className="font-normal text-gray-700">{DESCRIPTION}</p>
        <h5 className="my-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {TITLE2}
        </h5>
        <p className="font-normal text-gray-700">{DESCRIPTION2}</p>
        <p className="font-normal text-gray-700 mt-4">
          More information can be found in{" "}
          <cite>
            <a
              href="https://en.wikipedia.org/wiki/Satoshi_Nakamoto"
              className="text-blue-700"
            >
              Satoshi Nakamoto Article on Wikipedia
            </a>
          </cite>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
