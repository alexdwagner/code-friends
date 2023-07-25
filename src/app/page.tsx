import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import PostCard from "../../components/PostCard";

export default function Home() {
  return (
    <>
      <Header />
      <SearchBar />
      <PostCard 
                profileImage="/headshot-alex-wagner.jpeg"
                name="Alex Wagner"
                handle="@alexwagner"
                descriptor="Web Developer"
                lastActive={2}
                headline="Working on CodeFriends!"
                body="Seeking collaborators to work on this app together."
                likes={5}
            />
      <Footer />
    </>
  );
}
