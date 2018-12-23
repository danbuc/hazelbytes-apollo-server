module.exports = {
    Query: {
        getPosts: async(_, args, { Post }) => {
            const posts = await Post.find({}).sort({ createdDate: 'desc' }).populate({
                path: 'createdBy',
                model: 'User'
            });
            return posts;
        }
    },
    Mutation: {
        addPost: async(_, { title, imageUrl, categories, excerpt, creatorId }, { Post }) => {
            const newPost = await new Post({
                title,
                imageUrl,
                categories,
                excerpt,
                createdBy: creatorId
            }).save();

            return newPost;
        },
        signupUser: async(_, { username, email, password }, { User }, info) => {
            const user = await User.findOne({ username });
            if (user) {
                throw new Error('User already exists');
            }

            const newUser = await new User({
                username,
                email,
                password
            }).save();

            return newUser;
        }
    }
}