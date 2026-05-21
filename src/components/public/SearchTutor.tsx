import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "../ui/input-group";

const SearchTutor = () => {
  return (
    <InputGroup className="mb-5 h-10 rounded-3">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
    </InputGroup>
  );
};

export default SearchTutor;
