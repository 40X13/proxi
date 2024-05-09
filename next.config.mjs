const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/proxy-cats',
                destination: 'https://meowfacts.herokuapp.com',
            },
            {
                source: '/proxy-ducks',
                destination: 'https://random-d.uk/api/random',
            },
        ];
    }
};
