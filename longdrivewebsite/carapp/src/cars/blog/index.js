// import React from "react";

// const Blog = () => {
//   const blogPosts = [
//     {
//       id: 1,
//       title: "The Best Long Drive Routes in 2025",
//       date: "January 2, 2025",
//       author: "John Doe",
//       content: `Exploring the open roads can be a thrilling experience. In this post, we highlight the most scenic and adventurous long-drive routes to consider this year, including routes along the Pacific Coast Highway and the Great Ocean Road.`,
//     },
//     {
//       id: 2,
//       title: "Essential Tips for a Perfect Long Drive",
//       date: "December 28, 2024",
//       author: "Jane Smith",
//       content: `Planning a long drive requires preparation. From checking your vehicle's condition to packing the right essentials, here are some tips to ensure your journey is smooth and memorable.`,
//     },
//     {
//       id: 3,
//       title: "Top Destinations for Road Trip Lovers",
//       date: "December 20, 2024",
//       author: "Travel Guru",
//       content: `Whether you're a solo traveler or with family, road trips offer unmatched freedom. Check out our list of top destinations, including the Rockies, Route 66, and the Amalfi Coast.`,
//     },
//   ];

//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         <h1 style={styles.title}>Long Drive Blog</h1>
//         <p style={styles.subtitle}>Your ultimate guide to unforgettable road trips</p>
//       </header>
//       <main style={styles.main}>
//         {blogPosts.map((post) => (
//           <article key={post.id} style={styles.blogPost}>
//             <h2 style={styles.postTitle}>{post.title}</h2>
//             <p style={styles.meta}>By {post.author} on {post.date}</p>
//             <p style={styles.content}>{post.content}</p>
//           </article>
//         ))}
//       </main>
//       <footer style={styles.footer}>
//         <p>Long Drive Blog &copy; 2025 | All Rights Reserved</p>
//       </footer>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     fontFamily: "Arial, sans-serif",
//     color: "#333",
//     lineHeight: "1.6",
//   },
//   header: {
//     backgroundColor: "#007bff",
//     color: "white",
//     padding: "20px 0",
//     textAlign: "center",
//   },
//   title: {
//     margin: 0,
//     fontSize: "2.5rem",
//   },
//   subtitle: {
//     margin: "10px 0",
//     fontSize: "1.2rem",
//   },
//   main: {
//     padding: "20px",
//     maxWidth: "800px",
//     margin: "0 auto",
//   },
//   blogPost: {
//     borderBottom: "1px solid #ddd",
//     marginBottom: "20px",
//     paddingBottom: "20px",
//   },
//   postTitle: {
//     fontSize: "1.8rem",
//     margin: "10px 0",
//   },
//   meta: {
//     fontSize: "0.9rem",
//     color: "#555",
//   },
//   content: {
//     fontSize: "1rem",
//   },
//   footer: {
//     textAlign: "center",
//     padding: "10px",
//     backgroundColor: "#f4f4f4",
//     marginTop: "20px",
//   },
// };

// export default Blog;
import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Best Long Drive Routes in 2025",
      date: "January 2, 2025",
      author: "John Doe",
      content: `Exploring the open roads can be a thrilling experience. In this post, we highlight the most scenic and adventurous long-drive routes to consider this year, including routes along the Pacific Coast Highway and the Great Ocean Road.`,
    },
    {
      id: 2,
      title: "Essential Tips for a Perfect Long Drive",
      date: "December 28, 2024",
      author: "Jane Smith",
      content: `Planning a long drive requires preparation. From checking your vehicle's condition to packing the right essentials, here are some tips to ensure your journey is smooth and memorable.`,
    },
    {
      id: 3,
      title: "Top Destinations for Road Trip Lovers",
      date: "December 20, 2024",
      author: "Travel Guru",
      content: `Whether you're a solo traveler or with family, road trips offer unmatched freedom. Check out our list of top destinations, including the Rockies, Route 66, and the Amalfi Coast.`,
    },
    {
      id: 4,
      title: "Must-Have Gadgets for Long Drives",
      date: "January 1, 2025",
      author: "Tech Enthusiast",
      content: `Long drives can be more enjoyable and stress-free with the right gadgets. From GPS devices to portable chargers and travel coolers, discover the essentials for tech-savvy travelers.`,
    },
    {
      id: 5,
      title: "How to Create the Perfect Road Trip Playlist",
      date: "December 15, 2024",
      author: "Music Maven",
      content: `Music is the heart of any road trip. Learn how to curate a playlist that keeps spirits high and complements the journey. Genres, vibes, and must-add tracks included!`,
    },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Long Drive Blog</h1>
        <p style={styles.subtitle}>Your ultimate guide to unforgettable road trips</p>
      </header>
      <main style={styles.main}>
        {blogPosts.map((post) => (
          <article key={post.id} style={styles.blogPost}>
            <h2 style={styles.postTitle}>{post.title}</h2>
            <p style={styles.meta}>By {post.author} on {post.date}</p>
            <p style={styles.content}>{post.content}</p>
          </article>
        ))}
      </main>
      <footer style={styles.footer}>
        <p>Long Drive Blog &copy; 2025 | All Rights Reserved</p>
        <p>Follow us on: <a href="https://www.facebook.com/selfdrivecarsbylongdrivecars/" style={styles.link}>Facebook</a> | <a href="https://www.instagram.com/longdrivecars_official/?hl=en" style={styles.link}>Instagram</a> | <a href="https://x.com/i/flow/login?redirect_after_login=%2Fldhfilm" style={styles.link}>Twitter</a></p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#333",
    lineHeight: "1.6",
    margin: "0",
    padding: "0",
  },
  header: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "20px 0",
    textAlign: "center",
  },
  title: {
    margin: 0,
    fontSize: "2.5rem",
  },
  subtitle: {
    margin: "10px 0",
    fontSize: "1.2rem",
  },
  main: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  blogPost: {
    borderBottom: "1px solid #ddd",
    marginBottom: "20px",
    paddingBottom: "20px",
  },
  postTitle: {
    fontSize: "1.8rem",
    margin: "10px 0",
  },
  meta: {
    fontSize: "0.9rem",
    color: "#555",
  },
  content: {
    fontSize: "1rem",
  },
  footer: {
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#f4f4f4",
    marginTop: "20px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    margin: "0 5px",
  },
  '@media (max-width: 768px)': {
    title: {
      fontSize: "2rem",
    },
    subtitle: {
      fontSize: "1rem",
    },
    blogPost: {
      paddingBottom: "10px",
    },
  },
};

export default Blog;
