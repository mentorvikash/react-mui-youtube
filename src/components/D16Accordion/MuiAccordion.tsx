import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import { ArrowDownward, ExpandMore } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

function MuiAccordion() {
  const [expended, setExpended] = useState<string | false>(false);
  const handleChange = (isExpended: boolean, cardvalue: string) => {
    setExpended(() => (isExpended ? cardvalue : false));
  };

  return (
    <Box>
      <Accordion
        expanded={expended === "card1"}
        onChange={(event, isExpended) => handleChange(isExpended, "card1")}
      >
        <AccordionSummary
          aria-label="expand card 1"
          id="expand-card-1"
          expandIcon={<ExpandMore />}
        >
          <Typography variant="h5">React Part 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color={"grey"}>
            {" "}
            s Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            illo, maiores saepe odit officia at aut commodi soluta unde laborum
            laboriosam voluptate inventore architecto debitis nesciunt rem autem
            deserunt perferendis id. Doloremque totam consequatur pariatur
            excepturi labore non nihil saepe architecto natus dolorem reiciendis
            illo, quod consequuntur hic deserunt perspiciatis.{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expended === "card2"}
        onChange={(event, isExpended) => handleChange(isExpended, "card2")}
      >
        <AccordionSummary
          aria-label="expand card 2"
          id="expand-card-2"
          expandIcon={<ExpandMore />}
        >
          <Typography variant="h5">React part 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color={"grey"}>
            {" "}
            s Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            illo, maiores saepe odit officia at aut commodi soluta unde laborum
            laboriosam voluptate inventore architecto debitis nesciunt rem autem
            deserunt perferendis id. Doloremque totam consequatur pariatur
            excepturi labore non nihil saepe architecto natus dolorem reiciendis
            illo, quod consequuntur hic deserunt perspiciatis.{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expended === "card3"}
        onChange={(event, isExpended) => handleChange(isExpended, "card3")}
      >
        <AccordionSummary
          aria-label="expand card 3"
          id="expand-card-3"
          expandIcon={<ExpandMore />}
        >
          <Typography variant="h5">React Part 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color={"grey"}>
            {" "}
            s Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            illo, maiores saepe odit officia at aut commodi soluta unde laborum
            laboriosam voluptate inventore architecto debitis nesciunt rem autem
            deserunt perferendis id. Doloremque totam consequatur pariatur
            excepturi labore non nihil saepe architecto natus dolorem reiciendis
            illo, quod consequuntur hic deserunt perspiciatis.{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default MuiAccordion;
