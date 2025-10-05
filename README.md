<h1>🌍 Travel Dude</h1>

Travel Dude is a modern travel companion website built with Next.js, Tailwind CSS, Prisma, and PostgreSQL (Neon).
It allows users to explore destinations, plan trips, and manage travel experiences with a clean, fast, and fully responsive interface.

🚀 Tech Stack

Technology	Description
Next.js	React-based framework for server-side rendering and full-stack features
Tailwind CSS	Utility-first CSS framework for rapid UI design
Prisma ORM	Modern database ORM for Node.js and TypeScript
PostgreSQL	Powerful relational database for reliable data storage
Neon	Cloud-hosted PostgreSQL database for serverless, scalable deployments

✨ Features

🗺️ Explore curated destinations and travel guides

📅 Create and manage personalized itineraries

🧭 View interactive maps and points of interest

🔐 Secure authentication & user management

📱 Fully responsive on mobile and desktop

⚡ Lightning-fast performance with Next.js and SSR

🧩 Project Structure

traveldude/
│
├── prisma/              # Prisma schema & migrations
├── public/              # Static assets (images, icons)
├── app/                 # Next.js routes and pages
├── components/          # Reusable UI components
├── lib/                 # Database connection, utilities
│
├── .env                 # Environment variables (create yourself)
├── package.json
├── prisma/schema.prisma
└── README.md

⚙️ Installation
1. Clone the Repository
git clone https://github.com/AdithyanMS175/traveldude.git

cd travel-dude

3. Install Dependencies
npm install
# or
yarn install

3. Configure Environment Variables

Create a .env file in the root directory.


💡 For Neon setup, visit: https://neon.tech

4. Set Up Prisma
npx prisma generate
npx prisma migrate dev --name init

5. Run the Development Server
npm run dev
# or
yarn dev


Now open http://localhost:3000
 to view the site.

Make sure your .env variables are properly set in your hosting environment.

🧠 Future Improvements

✈️ AI-powered travel recommendations

🧳 Trip expense tracking

🗨️ Community forums

📍 Real-time location sharing

🌤️ Integration with live weather APIs

🤝 Contributing

Contributions are welcome!
If you’d like to add new features or fix bugs:

Fork the repo

Create your branch (git checkout -b feature/awesome-feature)

Commit changes (git commit -m "Add awesome feature")

Push (git push origin feature/awesome-feature)

Open a Pull Request 🚀

🧾 License

This project is licensed under the MIT License — you’re free to use, modify, and distribute with attribution.

👨‍💻 Author

Adithyan M.S
💼 MERN Stack Developer | Passionate about Web & AI
📍 Kerala, India
📧 adithyanms175@gmail.com
