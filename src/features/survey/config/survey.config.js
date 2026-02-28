export const surveyDefaultValues = {
  surveyName: "",
  time_zone: "",
  date: null,
  launchTime: null,
  emailGroup: "",

  emailContent: {
    templateId: null,
    templateName: "",
    senderName: "",
    subject: "",
    body: "",
  },

  questions: [],
};

export const timeZoneOptions = [
  { label: "UTC", value: "UTC" },
  { label: "Eastern Time (US & Canada)", value: "America/New_York" },
  { label: "Central Time (US & Canada)", value: "America/Chicago" },
  { label: "Pacific Time (US & Canada)", value: "America/Los_Angeles" },
  { label: "London", value: "Europe/London" },
  { label: "Berlin", value: "Europe/Berlin" },
  { label: "India (IST)", value: "Asia/Kolkata" },
];

export const emailGroupOptions = [
  { label: "All Users", value: "all_users" },
  { label: "New Users (Last 30 Days)", value: "new_users_30" },
  { label: "Active Users", value: "active_users" },
  { label: "Inactive Users", value: "inactive_users" },
  { label: "Premium Subscribers", value: "premium_users" },
  { label: "Trial Users", value: "trial_users" },
];

export const emailContentOptions = [
  { label: "Choose a Template", value: "existing" },
  { label: "Manually configure Email Content", value: "new" },
];

export const emailTemplateColumns = [
  {
    field: "template_name",
    headerName: "Template Name",
    minWidth: { xs: 150, md: 300 },
    color: "blue",
  },
  { field: "last_updated", headerName: "Last Updated" },
];
export const emailTemplateRows = [
  {
    id: 1,
    template_name: "Welcome Template",
    last_updated: "2024-06-01 12:00 PM",
  },
  {
    id: 2,
    template_name: "Feedback Request",
    last_updated: "2024-05-28 09:30 AM",
  },
  {
    id: 3,
    template_name: "Survey Reminder",
    last_updated: "2024-05-30 03:45 PM",
  },
];
