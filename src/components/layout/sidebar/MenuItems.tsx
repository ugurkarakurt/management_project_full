import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconTypography,
  IconMoodHappy,
  IconBox,
  IconPencil,
  IconBrowser
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "MUI Components",
  },
  {
    id: uniqueId(),
    title: "Input Components",
    icon: IconPencil,
    children: [  // Parent - sadece accordion görevi görecek
      {
        id: uniqueId(),
        title: "Autocompletes",
        href: "/style-guide/mui-components/input-components/autocompletes",
      },
      {
        id: uniqueId(),
        title: "Buttons",
        href: "/style-guide/mui-components/input-components/buttons",
      },
      {
        id: uniqueId(),
        title: "Button Groups",
        href: "/style-guide/mui-components/input-components/button-groups",
      },
      {
        id: uniqueId(),
        title: "Checkboxes",
        href: "/style-guide/mui-components/input-components/checkboxes",
      },
      {
        id: uniqueId(),
        title: "Floating Action Buttons",
        href: "/style-guide/mui-components/input-components/floating-action-buttons",
      },
      {
        id: uniqueId(),
        title: "Radio Groups",
        href: "/style-guide/mui-components/input-components/radio-groups",
      },
      {
        id: uniqueId(),
        title: "Ratings",
        href: "/style-guide/mui-components/input-components/ratings",
      },
      {
        id: uniqueId(),
        title: "Selects",
        href: "/style-guide/mui-components/input-components/selects",
      },
      {
        id: uniqueId(),
        title: "Sliders",
        href: "/style-guide/mui-components/input-components/sliders",
      },
      {
        id: uniqueId(),
        title: "Switches",
        href: "/style-guide/mui-components/input-components/switches",
      },
      {
        id: uniqueId(),
        title: "Text Fields",
        href: "/style-guide/mui-components/input-components/text-fields",
      },
      {
        id: uniqueId(),
        title: "Transfer Lists",
        href: "/style-guide/mui-components/input-components/transfer-lists",
      },
      {
        id: uniqueId(),
        title: "Toggle Buttons",
        href: "/style-guide/mui-components/input-components/toggle-buttons",
      },
    ]
  },
  {
    id: uniqueId(),
    title: "Data Display Components",
    icon: IconBrowser,
    children: [  // Parent - sadece accordion görevi görecek
      {
        id: uniqueId(),
        title: "Avatars",
        href: "/style-guide/mui-components/data-display-components/avatars",
      },
      {
        id: uniqueId(),
        title: "Badges",
        href: "/style-guide/mui-components/data-display-components/badges",
      },
      {
        id: uniqueId(),
        title: "Chips",
        href: "/style-guide/mui-components/data-display-components/chips",
      },
      {
        id: uniqueId(),
        title: "Dividers",
        href: "/style-guide/mui-components/data-display-components/dividers",
      },
      {
        id: uniqueId(),
        title: "MUI Icons",
        href: "/style-guide/mui-components/data-display-components/mui-icons",
      },
      {
        id: uniqueId(),
        title: "Lists",
        href: "/style-guide/mui-components/data-display-components/lists",
      }
    ]
  },
  {
    id: uniqueId(),
    title: "Typography",
    icon: IconTypography,
    href: "/style-guide/typography"
  },
  {
    id: uniqueId(),
    title: "Shadows",
    icon: IconCopy,
    href: "/style-guide/shadow"
  },
  {
    navlabel: true,
    subheader: "Extra",
  },
];

export default Menuitems;