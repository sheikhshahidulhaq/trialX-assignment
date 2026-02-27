import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextInput from "../../../components/form/TextInput";

export default function TemplateSection() {
  return (
    <>
      <Stack>
        <Typography fontWeight={"bold"}>
          Template Name <span style={{ color: "red" }}>*</span>
        </Typography>

        <TextInput
          name="templateName"
          placeholder="Enter the name of the template"
          rules={{ required: "Required" }}
        />
      </Stack>

      <Stack>
        <Typography fontWeight={"bold"}>
          Sender Name <span style={{ color: "red" }}>*</span>
        </Typography>

        <TextInput
          name="senderName"
          placeholder="Enter the name which will be used for the sender"
          rules={{ required: "Required" }}
        />
      </Stack>

      <Stack>
        <Typography fontWeight={"bold"}>
          Subject <span style={{ color: "red" }}>*</span>
        </Typography>

        <TextInput
          name="subject"
          placeholder="Enter the subject"
          rules={{ required: "Required" }}
        />
      </Stack>
    </>
  );
}
