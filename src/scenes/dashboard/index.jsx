import Header from "../../components/Header";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Header title={"Dashboard"} subtilte={"Welcome to your Dashboard"} />
      </Box>
    </Box>
  );
};

export default Dashboard;
