const postCreateBlog = async (title, description, image_url, blog_tags, user) => {
    try {
        const response = await fetch("https://social-media-api.cyclic.app/api/blogs/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                description: description,
                image_url: image_url,
                blog_tags: blog_tags,
                user: user
            }),
        });

        const result = await response.json();
        return result;
    } catch (error) {
        return { error: error.message };
    }
};

export default postCreateBlog;
