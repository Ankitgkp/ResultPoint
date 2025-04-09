function Navbar() {
    return (
        <nav className="absolute z-10 w-full bg-[#050D1F] text-white px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img src="https://media-hosting.imagekit.io/75bca980ee4f498f/Screenshot%202025-04-09%20at%2011.49.01%E2%80%AFPM.png?Expires=1838831013&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kzKc5SgooW5TGJJdavBelh8MbTtuTBLZ1aDn-uoGNJfuyvZEpuuUKqpkMcYX0n2sUeq49unUxQtgwiGEJd345qSkwCNP1Bpwd3hyNRsQKqtiYNX8zmim8VXxk15RBJk4ImqglaMCRvxTaOMWlIg06nLUfGqoEN7RoeGkwMIlW6YBjpaN7hKcolBocdrXqjZfoxCQsTgQJ82dXuWA9WumwvQMMYLWRc1av-OnMMOtWPobp~XogvFoybwGyxH9VeC5830kAOYNs3-jOE~utntV~jyQllU-wlc6eC6eJltwGtX-zsq08oe2nylB1II5~l4HlBWsruixiEUJNPhBPkmfwQ__" alt="ProPeers Logo" className="h-10 w-auto" />
            </div>

            <div className="flex items-center gap-6 text-sm font-medium">
                <a href="#" className="text-blue-500">Home</a>
                <a href="#">Exams</a>
                <a href="#">Results</a>
                <a href="#">Admit Cards</a>
                <a href="#">Resources</a>
                <a className="text-orange-400" href="#">Free Test Series</a>
            </div>

            <div className="flex items-center gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 px-4 py-1.5 rounded-full text-white">
                    Login
                </button>
            </div>
        </nav>
    );
}


export default Navbar;