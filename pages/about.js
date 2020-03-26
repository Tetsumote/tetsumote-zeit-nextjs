import Layout from '../comps/MyLayout'
import Link from 'next/link';

function getPosts(){
    return [
        {id: 'hello-nextjs', title:'Hello Next.js'},
        {id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
        {id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
    ]
}

const PostLink = ({ post }) => (
    <li>
      <Link href="/my-blog/[id]" as={`/my-blog/${post.id}`}>
        <a>{post.title}</a>
      </Link>
      <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
    </li>
  );

export default function About(){
    return(
        <Layout>
            <p>This is about page</p>
            <p>My Blog</p>
            <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul>
            <style jsx>
                {`
                    h1,
                    a {
                      font-family: 'Arial';
                    }
            
                    ul {
                      padding: 0;
                    }
                `}
            </style>
        </Layout>
    )
}