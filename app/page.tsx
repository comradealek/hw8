import Counter from "@/components/counter.js"
import GitHub from "@/components/github.js"

export default function Home() {
  return (
    <main>
      <h1></h1>
      <div style={{
        width: "50%",
        margin: "2in auto"
      }}>
        <Counter inc={1} color={"blue"}/>
        <Counter inc={2} color={"red"}/>
        <hr />
        <GitHub />
        <hr />
      </div>
      <div style={{margin: "auto", width: "fit-content"}}>
        <p>The store is <a href="http://csci331vm.cs.montana.edu:3046/store">here</a></p>
      </div>
    </main>
  );
}
