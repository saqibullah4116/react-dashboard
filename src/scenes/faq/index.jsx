import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import Header from "../../components/Header";
import { useTheme } from "@emotion/react";
import { ExpandMore } from "@mui/icons-material";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const accordionDataList = [
    {
      title: "Q1: Who is Saqib Ullah?",
      content: `Saqib Ullah is a talented developer and the creator of the React Admin Dashboard. He is known for his expertise in building efficient and user-friendly web applications.`,
    },
    {
      title:
        "Q2: What inspired Saqib Ullah to create the React Admin Dashboard?",
      content: `Saqib Ullah was inspired to create the React Admin Dashboard to simplify the process of building robust and feature-rich admin panels using React. He aimed to provide developers with a flexible and easy-to-use solution for managing their applications.`,
    },
    {
      title:
        "Q3: How can I use Saqib Ullah's React Admin Dashboard in my project?",
      content: `To use Saqib Ullah's React Admin Dashboard in your project, you can follow the documentation provided by Saqib. It typically involves installing the necessary dependencies, configuring the dashboard, and integrating it into your React application. Be sure to check the official documentation for detailed instructions.`,
    },
    {
      title:
        "Q4: Is Saqib Ullah actively maintaining the React Admin Dashboard?",
      content: `Yes, Saqib Ullah is actively maintaining the React Admin Dashboard. He regularly updates the dashboard to incorporate new features, improvements, and bug fixes. It's recommended to check the GitHub repository for the latest releases and updates.`,
    },
    {
      title:
        "Q5: Can I contribute to the development of the React Admin Dashboard?",
      content: `Certainly! Saqib Ullah welcomes contributions from the community. You can contribute by submitting bug reports, feature requests, or even by creating pull requests. Check the project's GitHub repository for guidelines on contributing.`,
    },
  ];

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      {accordionDataList.map((data, index) => (
        <Accordion key={index} defaultExpanded={index === 0}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              {data.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{data.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
