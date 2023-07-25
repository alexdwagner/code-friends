import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import PostCard from "../../components/PostCard";
import PostList from "../../components/PostList"; 

export default function Home() {
  return (
    <>
      <Header />
      <SearchBar />
      <PostList /> 
      <Footer />
    </>
  );
}
