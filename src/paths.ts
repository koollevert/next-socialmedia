const paths={
    home(){
        return "/";
    },

    topicShow(topicSlug: string){
        return `/topics/${topicSlug}`;
    },

    postCreate(topicSlug: string){
        return  `/topic/${topicSlug}/posts/new`;
    },

    postShow(topicSlug: string, postId: string){
        return `/topic/${topicSlug}/posts/${postId}`;

    }

};

export default paths;