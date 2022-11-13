import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import {useState, useEffect} from 'react';
import Engine from "./engine.json";

import Breaking from "./breaking.json";
import Warning from "./warning.json";
import Default from "./default.json";

const errTitles = ["Not Active", "Active", "Error", "No Data"];

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([]);

  console.log("Engine", Engine);
  console.log("default", Default);
  console.log("breaking", Breaking);
  console.log("warning", Warning);
  // return (
  //     <div>
  //       {
  //         Engine.map(engine =>{
  //           return(
  //               <div>
  //                 {engine?.payload.messages[0]?.value}
  //               </div>
  //           )
  //         })
  //       }
  //     </div>
  // )


  return (
      <div>
        {
          Breaking.map(breaking => {
            return(

          Default.map(Default =>{
            return(

          Engine.map(engine =>{
            return(
                <div>
                  <Box m="20px">
                    {/* HEADER */}
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Header title="DAIMLER DASHBOARD" subtitle="Welcome to your dashboard" />

                      <Box>
                        <Button
                            sx={{
                              backgroundColor: colors.blueAccent[700],
                              color: colors.grey[100],
                              fontSize: "14px",
                              fontWeight: "bold",
                              padding: "10px 20px",
                            }}
                        >
                          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                          Download Reports
                        </Button>
                      </Box>
                    </Box>


                    {/* GRID & CHARTS ----------------------------------------------*/}

                    <Box
                        display="grid"
                        gridTemplateColumns="repeat(12, 1fr)"
                        gridAutoRows="140px"
                        gap="20px"
                    >
                      {/* ROW 1 */}
                      <Box
                          gridColumn="span 3"
                          backgroundColor={colors.primary[400]}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                      >
                        <StatBox
                            title={Default?.payload?.messages[12].value}
                            subtitle="Vehicle Speed (km/hr)"
                            progress="0.70"
                            icon={
                              <TrafficIcon
                                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                              />
                            }
                        />
                      </Box>

                      <Box
                          gridColumn="span 3"
                          backgroundColor={colors.primary[400]}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                      >
                        <StatBox
                            title={Default?.payload?.messages[11].value}
                            subtitle="Total Vehicle Distance (km)"
                            progress="0.80"
                            icon={
                              <TrafficIcon
                                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                              />
                            }
                        />
                      </Box>

                      <Box
                          gridColumn="span 3"
                          backgroundColor={colors.primary[400]}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                      >
                        <StatBox
                            title={breaking?.payload?.messages[0]?.value}
                            subtitle="Distance to Object (km)"
                            progress="0.75"
                            icon={
                              <TrafficIcon
                                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                              />
                            }
                        />

                      </Box>

                      <Box
                          gridColumn="span 3"
                          backgroundColor={colors.primary[400]}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                      >
                        <StatBox
                            title={engine?.payload.messages[25]?.value}
                            subtitle="Number of Satelites"
                            progress="0.75"
                            icon={
                              <TrafficIcon
                                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                              />
                            }
                        />
                      </Box>

                      <Box
                          gridColumn="span 3"
                          backgroundColor={colors.primary[400]}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                      >
                        <StatBox
                            title={errTitles[engine?.payload.messages[61]?.value]}
                            subtitle="ABA Warning Light"
                            progress="0.00"

                        />
                      </Box>

                      <Box
                          gridColumn="span 3"
                          backgroundColor={colors.primary[400]}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                      >
                        <StatBox
                            title={errTitles[engine?.payload.messages[1]?.value]}
                            subtitle="Anti-Lock Brake Status"
                            progress="0.00"

                        />
                      </Box>
                      <Box
                          gridColumn="span 3"
                          backgroundColor={colors.primary[400]}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                      >
                        <StatBox
                            title={errTitles[engine?.payload.messages[3]?.value]}
                            subtitle="Distance Alert"
                            progress="0.00"

                        />
                      </Box>
                      <Box
                          gridColumn="span 3"
                          backgroundColor={colors.primary[400]}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                      >
                        <StatBox
                            title={errTitles[engine?.payload.messages[62]?.value]}
                            subtitle="Active Lane Assist"
                            progress="0.00"

                        />
                      </Box>

                      <Box
                          gridColumn="span 3"
                          backgroundColor={colors.primary[400]}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                      >
                        <StatBox
                            title="None"
                            subtitle="Lane Departure Warning"
                            progress="0.00"

                        />
                      </Box>


                      <Box
                          gridColumn="span 3"
                          backgroundColor={colors.primary[300]}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                      >
                        <StatBox
                            title={errTitles[engine?.payload?.messages[9]?.value]}
                            subtitle="Manual or Auto with AMT"
                            progress="1.00"
                        />
                      </Box>

                      <Box
                          gridColumn="span 3"
                          backgroundColor={colors.primary[300]}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                      >
                        <StatBox
                            title={errTitles[engine?.payload?.messages[11]?.value]}
                            subtitle="Cruise Control"
                            progress="1.00"
                            sx={{ color: colors.redAccent[600], fontSize: "26px" }}

                        />
                      </Box>

                      {/* ROW 2 -----------------------------------------------------  */}
                      <Box
                          gridColumn="span 8"
                          gridRow="span 2"
                          backgroundColor={colors.primary[400]}
                      >
                        <Box
                            mt="25px"
                            p="0 30px"
                            display="flex "
                            justifyContent="space-between"
                            alignItems="center"
                        >
                          <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                              Fuel Use over Time
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                color={colors.greenAccent[500]}
                            >
                              September 24-25, 2022
                            </Typography>
                          </Box>
                          <Box>
                            <IconButton>
                              <DownloadOutlinedIcon
                                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                              />
                            </IconButton>
                          </Box>
                        </Box>
                        <Box height="250px" m="-20px 0 0 0">
                          <LineChart isDashboard={true} />
                        </Box>
                      </Box>
                      <Box
                          gridColumn="span 4"
                          gridRow="span 2"
                          backgroundColor={colors.primary[400]}
                          overflow="auto"
                      >
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            colors={colors.grey[100]}
                            p="15px"
                        >
                          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                            Driver Indicators
                          </Typography>
                        </Box>
                        {mockTransactions.map((transaction, i) => (
                            <Box
                                key={`${transaction.txId}-${i}`}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                borderBottom={`4px solid ${colors.primary[500]}`}
                                p="15px"
                            >
                              <Box>
                                <Typography
                                    color={colors.greenAccent[500]}
                                    variant="h5"
                                    fontWeight="600"
                                >
                                  {transaction.txId}
                                </Typography>
                                <Typography color={colors.grey[100]}>
                                  {transaction.user}
                                </Typography>
                              </Box>
                              <Box color={colors.grey[100]}>{transaction.date}</Box>
                              <Box
                                  backgroundColor={colors.redAccent[500]}
                                  p="5px 10px"
                                  borderRadius="4px"
                              >
                                {transaction.cost}
                              </Box>
                            </Box>
                        ))}
                      </Box>

                      {/* ROW 3 ----------------------------------------------*/}
                      <Box
                          gridColumn="span 4"
                          gridRow="span 2"
                          backgroundColor={colors.primary[400]}
                          p="30px"
                      >
                        <Typography variant="h5" fontWeight="600">
                          Oil Temperture of Vehicle
                        </Typography>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            mt="25px"
                        >
                          <ProgressCircle size="125" />
                          <Typography
                              variant="h5"
                              color={colors.greenAccent[500]}
                              sx={{ mt: "15px" }}
                          >
                            {engine?.payload.messages[35]?.value}
                          </Typography>
                          <Typography>Oil Temperture (Celcius)</Typography>
                        </Box>
                      </Box>
                      <Box
                          gridColumn="span 4"
                          gridRow="span 2"
                          backgroundColor={colors.primary[400]}
                      >
                        <Typography
                            variant="h5"
                            fontWeight="600"
                            sx={{ padding: "30px 30px 0 30px" }}
                        >
                          Quality of Driving
                        </Typography>
                        <Box height="250px" mt="-20px">
                          <BarChart isDashboard={true} />
                        </Box>
                      </Box>
                      <Box
                          gridColumn="span 4"
                          gridRow="span 2"
                          backgroundColor={colors.primary[400]}
                          padding="30px"
                      >
                        <Typography
                            variant="h5"
                            fontWeight="600"
                            sx={{ marginBottom: "15px" }}
                        >
                          Geography Based Traffic
                        </Typography>
                        <Box height="200px">
                          <GeographyChart isDashboard={true} />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </div>
            )
          }))
          })
            )})
        }

      </div>


  )};


export default Dashboard;
