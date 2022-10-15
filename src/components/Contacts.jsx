import React from "react";
import { Box, Link, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import { contactsIcons } from "../data/Data";
import Map from "./Map";

const Contacts = () => {
  return (
    <Box id="contacts" sx={{ mb: { xs: "50px", md: "100px" } }}>
      <Typography
        textAlign="center"
        fontWeight={800}
        sx={{
          fontSize: { xs: "25px", md: "30px" },
          mb: { xs: "20px", md: "30px" },
        }}
      >
        Контакты
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Map />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "left",
            flexDirection: "column",
            justifyContent: "space-between",
            width: { xs: "100%", md: "50%" },
            my: "-10px",
            p: "20px",
          }}
        >
          <Typography
            textAlign="left"
            sx={{
              fontSize: { xs: "15px", md: "20px" },
            }}
            my="10px"
          >
            <LocationOnIcon
              fontSize="large"
              sx={{
                mr: "10px",
                color: "custom.mediumGrey",
              }}
            />
            ТЦ "Дарья", 3 этаж, Строгинский б-р, Дом 1, г. Москва, 876543
          </Typography>
          <Typography
            textAlign="left"
            sx={{
              fontSize: { xs: "15px", md: "20px" },
            }}
            my="10px"
          >
            <AccessTimeIcon
              fontSize="large"
              sx={{
                mr: "10px",
                color: "custom.mediumGrey",
              }}
            />
            Наша кондитерская работает ежедневно с 09:00 до 21:00 без выходных
          </Typography>
          <Typography
            textAlign="left"
            my="10px"
            sx={{
              fontSize: { xs: "15px", md: "20px" },
            }}
          >
            Контакты:
          </Typography>
          <Typography
            textAlign="left"
            sx={{
              fontSize: { xs: "15px", md: "20px" },
            }}
            my="10px"
          >
            <EmailOutlinedIcon
              fontSize="large"
              sx={{ mr: "10px", color: "custom.mediumGrey" }}
            />
            onemorecakemoscow@example.com
          </Typography>
          <Typography
            textAlign="left"
            sx={{
              fontSize: { xs: "15px", md: "20px" },
            }}
            my="10px"
          >
            <PhoneEnabledOutlinedIcon
              fontSize="large"
              sx={{ mr: "10px", color: "custom.mediumGrey" }}
            />
            +7 (965) 450-45-87
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            mx="-16px"
            mt="30px"
            sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
          >
            {contactsIcons.map((item) => (
              <Link to={item.to} key={item.id}>
                <img
                  className="w-[40px] mx-4 duration-300 hover:scale-125"
                  src={item.logo}
                  alt="social"
                />
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contacts;
