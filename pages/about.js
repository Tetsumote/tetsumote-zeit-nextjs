import Layout from '../comps/MyLayout'
import Link from 'next/link';

function getPosts(){
    return [
        {id: 'hello-nextjs', title:'Hello Next.js'},
        {id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
        {id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
    ]
}


export default function About(){
    return(
        <Layout>
            <p>This is about page</p>
            <p>My Blog</p>
            <ul>
                {getPosts().map(post => (
                    <li key={`${post.id}`}>
                        <a href="/my-blog/[id]" as={`/p/${post.id}`}>{post.title}</a>
                    </li>
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
            
                    li {
                      list-style: none;
                      margin: 5px 0;
                    }
            
                    a {
                      text-decoration: none;
                      color: blue;
                    }
            
                    a:hover {
                      opacity: 0.6;
                    }
                `}
            </style>
        </Layout>
    )
}