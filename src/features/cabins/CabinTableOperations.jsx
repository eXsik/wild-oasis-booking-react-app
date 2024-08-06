import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={[
          { value: "all", label: "All" },
          { value: "with-discount", label: "With discount" },
          { value: "no-discount", label: "No discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-dsc", label: "Sort by name (Z-A)" },
          { value: "regular_price-asc", label: "Sort by low price" },
          { value: "regular_price-dsc", label: "Sort by high price" },
          { value: "max_capacity-asc", label: "Sort by low capacity" },
          { value: "max_capacity-dsc", label: "Sort by high capacity" },
        ]}
      />
    </TableOperations>
  );
};

export default CabinTableOperations;
