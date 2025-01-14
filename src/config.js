const links = {
  social: {
    name: "Sasikumar",
    mobileNo: "6380740640",
    email: "sasimdu.murugan@gmail.com",
    linkedIn: "https://www.linkedin.com/in/sasikumar-m-365071209",
    whatsapp: `https://api.whatsapp.com/send/?phone=%2B916380740640&text=Hello+Sasi`,
    telegram: "https://t.me/sasitelegramofficial",
  },
  tech: {
    jobRole: "Mobile App Developer",
    resumeLink:
      "https://drive.google.com/file/d/1bfQHj-2-sZLmNtjlfzWiwX6TQwN39DWj/view?usp=sharing",
    noOfExperience: "3+",
    github: "https://github.com/sasi368",
  },
};

const contents = {
  aboutMe: {
    content1:
      "I'm Sasikumar a Blockchain based Mobile app developer and a Team Lead with over all experience of 3.7 years. Driven and enthusiastic mobile app developer with a strong passion for creating exceptional app experiences.",
    content2:
      "I began my professional journey at Menpani Technologies Pvt Ltd, where I honed my skills as a React Native developer and contributed to building dynamic mobile applications. Currently, I’m thriving at Wealwin Technologies Pvt Ltd, as a Team Lead where I specialize in blockchain-based mobile app development. This role has allowed me to dive into cutting-edge technologies while mastering multiple frameworks, fueling my passion for innovation and growth in the ever-evolving mobile app industry.",

    content3:
      "With a strong foundation in mobile app development, I bring expertise in React Native, Flutter and Ionic, enabling me to create seamless, cross-platform applications.",
  },
};

const projects = [
  {
    title: "Decentralized Crypto Wallet with Multi-Network Support",
    description:
      "Designed and developed a decentralized cryptocurrency wallet similar to Trust Wallet, supporting all EVM-compatible networks alongside BTC, LTC, and XRP. Own Dapp browser, Integrated advanced features like ParaSwap and Stargate Swap for seamless token swapping, staking capabilities, and an engaging game module with prediction and spin wheel functionalities. Leveraged blockchain technology to deliver a secure, scalable, and user-friendly solution for managing digital assets.",
    playstore:
      "https://play.google.com/store/apps/details?id=com.b5wallet&pcampaignid=web_share",
    appstore: "",
    site: "https://b5wallet.com/",
    techUses: [
      "React Native",
      "web3.js",
      "ethers.js",
      "Moralis",
      "bitcoin-core",
    ],
  },

  {
    title: "Centralized Crypto Exchange",
    description:
      "Designed and developed a centralized cryptocurrency exchange application that offers a comprehensive suite of features to cater to diverse trading needs. The application includes Spot Trade for instant buying and selling of cryptocurrencies, Peer-to-Peer (P2P) and Futures Trading for advanced users looking to trade on margin and leverage market predictions. Additionally, the platform incorporates Copy Trading, enabling beginners to replicate the strategies of experienced traders for better outcomes.",
    playstore:
      "https://play.google.com/store/apps/details?id=mudra.exchange&pcampaignid=web_share",
    appstore: "https://apps.apple.com/in/app/mudraexchange/id1623044880",

    site: "https://www.mudra.exchange/",
    techUses: ["React Native", "Flutter", "node.js", "mongodb", "socket-io"],
  },

  {
    title: "Event Management and Invitation App Development",
    description:
      "Developed an innovative event management app designed to streamline the process of creating and sending personalized digital invitations. The app features a user-friendly interface with customizable templates, enabling users to design creative and unique invitations effortlessly. By offering the option to send invitations via SMS, the app enhances the personal touch, encouraging higher attendance and demonstrating genuine care for the event. This project showcases expertise in crafting engaging and functional mobile applications tailored for social and professional gatherings.",
    playstore:
      "https://play.google.com/store/apps/details?id=com.invajt&pcampaignid=web_share",
    appstore: "https://apps.apple.com/se/app/invajt/id6471048773?l=en-GB",
    site: "https://invajt.com/",
    techUses: ["React Native", "node.js", "mongodb"],
  },

  {
    title: "Taxi Booking - Customer App",
    description:
      "The customer app offers a convenient and user-friendly platform for booking taxis on demand. Users can quickly request rides, track drivers in real-time, and securely pay within the app. The app also allows users to view ride history, manage their profiles, and provide ratings and feedback for completed trips. Designed to simplify transportation, it ensures a seamless experience for customers.",
    playstore: "",
    appstore: "",
    site: "",
    techUses: ["React Native", "Laravel", "My Sql", "", "Google Maps API"],
  },

  {
    title: "Taxi Service Management - Driver App",
    description:
      "The driver app is tailored to help taxi drivers efficiently manage ride requests. Drivers can accept or decline bookings, navigate to pickup and drop-off locations using GPS, and track their earnings in real-time. The app includes features such as trip history, profile management, and in-app communication with passengers to ensure smooth and professional operations. It empowers drivers with the tools they need to provide reliable taxi services.",
    playstore: "",
    appstore: "",
    site: "",
    techUses: ["React Native", "Laravel", "My Sql", "", "Google Maps API"],
  },

  {
    title: "NFT Creator and Manager",
    description:
      "An advanced NFT application designed for creating and managing NFTs on Ethereum (ETH) and Binance Smart Chain (BSC) networks. Users can create both single (ERC-721) and multiple (ERC-1155) NFTs effortlessly. The app also allows users to transfer NFTs to other wallets seamlessly, ensuring a smooth and secure experience.",

    techUses: ["React Native", "Node.js", "Ethers.js", "MongoDB"],

    playstore: "",
    appstore: "",
    site: "",
  },
];
export { links, contents, projects };
