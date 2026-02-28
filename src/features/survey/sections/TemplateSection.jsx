import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextInput from "../../../components/form/TextInput";
import RichTextField from "../../../components/form/RichTextField";
import TemplateTagChip from "../../../components/TemplateTagChip";
export default function TemplateSection() {
  return (
    <Stack spacing={1}>
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
      <Stack spacing={1}>
        <Stack>
          <Typography fontWeight={"bold"}>
            Body <span style={{ color: "red" }}>*</span>
          </Typography>
          <Typography>You can use the following tags:</Typography>
        </Stack>
        <Stack spacing={0.5} direction={"row"} pb={1}>
          {["FIRST_NAME", "LAST_NAME", "SURVEY_URL", "PROPERTY_NAME"].map(
            (item, index) => (
              <TemplateTagChip
                key={`rich-textbox-chip-${index}`}
                label={item}
              />
            ),
          )}
        </Stack>

        <RichTextField
          name="body"
          placeholder="Template text"
          height={150}
          rules={{
            validate: (value) =>
              value.replace(/<(.|\n)*?>/g, "").trim().length > 0 ||
              "Description is required",
          }}
        />
      </Stack>
    </Stack>
  );
}
