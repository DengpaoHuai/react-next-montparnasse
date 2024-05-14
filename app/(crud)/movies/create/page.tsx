import { createMovies } from "@/actions/movies";
import { Button } from "@/components/ui/button";

const Create = () => {
  return (
    <div>
      <h1>Create</h1>
      <form action={createMovies}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="rating" placeholder="Genre" />
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};

export default Create;
