import Layout from './components/MyLayout'

class Post extends React.Component {
  static async getInitialProps({ query }) {
    console.log('SLUG', query.slug);
    return {};
  }
  render() {
    return <Layout><h1>My blog post</h1></Layout>;
  }
}

export default Post;
