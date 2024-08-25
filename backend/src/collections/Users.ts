import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: "First Name",
      type: "text",
      required: true,
    },
  ],
};

export default Users;
