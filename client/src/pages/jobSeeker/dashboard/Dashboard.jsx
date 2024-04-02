import React, { useState } from "react";
import "./dashboard.css";
import {
  Select,
  SelectItem,
  Chip,
  RadioGroup,
  Radio,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  Checkbox,
} from "@nextui-org/react";

const Dashboard = () => {
  const [range, setRange] = useState(0);
  const [selectedCompanyType, setSelectedCompanyType] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const mode = [
    { id: 1, name: "Work from Office" },
    { id: 2, name: "Remote" },
    { id: 3, name: "Hybrid" },
  ];

  const freshness = [
    { id: 1, name: "Last 30 days" },
    { id: 2, name: "Last 15 days" },
    { id: 3, name: "Last 7 days" },
    { id: 4, name: "Today" },
  ];

  const locations = [
    { id: 1, name: "Mumbai" },
    { id: 2, name: "Bangalore" },
    { id: 3, name: "Delhi" },
    { id: 4, name: "Chennai" },
    { id: 5, name: "Hyderabad" },
    { id: 6, name: "Pune" },
    { id: 7, name: "Gujarat" },
    { id: 8, name: "Noida" },
  ];

  return (
    <div className="jobSeeker-dashboard">
      <div className="filter dashboard-modal">
        <h1>All Filters</h1>
        <div className="filter-body">
          <Select
            items={mode}
            label="Work Mode"
            variant="bordered"
            isMultiline={true}
            selectionMode="multiple"
            placeholder="Select Work Mode"
            labelPlacement="outside"
            classNames={{
              base: "max-w-s",
              trigger: "min-h-unit-12 py-2",
            }}
            renderValue={(items) => {
              return (
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Chip key={item.key}>{item.data.name}</Chip>
                  ))}
                </div>
              );
            }}
          >
            {(mode) => (
              <SelectItem key={mode.id} textValue={mode.name}>
                <div className="flex gap-2 items-center">
                  <div className="flex flex-col">
                    <span className="text-small">{mode.name}</span>
                  </div>
                </div>
              </SelectItem>
            )}
          </Select>
          <div className="items">
            <h1>Experience</h1>
            <div className="flex gap-5">
              <input
                type="range"
                name="range"
                defaultValue={0}
                max={30}
                onChange={(e) => setRange(e.target.value)}
              />
              <p>{range} years</p>
            </div>
          </div>
          <RadioGroup
            label="Company Type"
            value={selectedCompanyType}
            onValueChange={setSelectedCompanyType}
          >
            <Radio value="Corporate">Corporate</Radio>
            <Radio value="Startup">Startup</Radio>
            <Radio value="Foreign MNC">Foreign MNC</Radio>
          </RadioGroup>

          <Button onPress={onOpen}>Select Work Location</Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Select All Locations
                  </ModalHeader>
                  <ModalBody>
                    {locations.map((item) => (
                      <Checkbox key={item.id} value={item.name}>
                        {item.name}
                      </Checkbox>
                    ))}
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Apply
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>

          <Select
            labelPlacement="outside-left"
            label="Freshness"
            placeholder="Select days"
            className="max-w-xs items-center"
          >
            {freshness.map((item) => (
              <SelectItem key={item.id} value={item.name}>
                {item.name}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <div className="jobs"></div>
    </div>
  );
};

export default Dashboard;
