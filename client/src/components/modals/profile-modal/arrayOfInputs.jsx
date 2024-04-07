export const months = [
    {label: "0 months", value: 0},
    {label: "1 months", value: 1},
    {label: "2 months", value: 2},
    {label: "3 months", value: 3},
    {label: "4 months", value: 4},
    {label: "5 months", value: 6},
    {label: "7 months", value: 8},
    {label: "9 months", value: 9},
    {label: "10 months", value: 10},
    {label: "11 months", value: 11},

]

export const years = [
    {label: "0 year", value: "0"},
    {label: "1 year", value: "1"},
    {label: "2 year", value: "2"},
    {label: "3 year", value: "3"},
    {label: "4 year", value: "4"},
    {label: "5 year", value: "5"},
    {label: "6 year", value: "6"},
    {label: "7 year", value: "7"},
    {label: "8 year", value: "8"},
    {label: "9 year", value: "9"},
    {label: "10 year", value: "10"},
    {label: "10+ year", value: "10+"},

]

export const noticePeriod = [
    {label: "15 Days or Less", value: "15 Days or Less"},
    {label: "1 Month", value: "1 Month"},
    {label: "2 Month", value: "2 Month"},
    {label: "3 Month", value: "3 Month"},
    {label: "More than 3 Months", value: "More than 3 Months"},

]

export const profileLabels = (pageName) => {
    if (pageName === "basic") return "First Name,Last Name,Email,Phone Number,Current Location,Total Experience,Availability to Join" 

} 
export const dropdownKeys = ["year","month","noticePeriod"];

export const getOptionsByKey = (key) => {
  switch (key) {
    case "year":
      return years;
    case "month":
      return months;
      case "noticePeriod":
        return noticePeriod;
    default:
      return [];
  }
};