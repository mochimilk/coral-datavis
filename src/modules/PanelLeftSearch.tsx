import React, { useState, useRef, useEffect } from "react";
import PanelLeft from "../components/Panels/PanelLeft.js";
import PanelLeftToolbar from "../components/Panels/PanelLeftToolbar.js";
import {
  ToolbarButton,
  Input,
  Button,
  Checkbox,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  Body1,
  RadioGroup,
  Radio,
} from "@fluentui/react-components";
import { Dismiss, Search } from "../imports/bundleicons.js";
import {
  ChevronDown20Regular,
  ChevronRight20Regular,
  Filter20Regular,
} from "@fluentui/react-icons";

interface SearchItem {
  content: React.ReactNode;
  searchableText: string;
  category: string;
  id: string;
}

interface PanelLeftSearchProps {
  selectedItems: Record<string, boolean>;
  setSelectedItems: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
  setSelectedDateRange: React.Dispatch<React.SetStateAction<string>>; // ✅ Ensure it's included
}

const PanelLeftSearch: React.FC<PanelLeftSearchProps> = ({
  selectedItems,
  setSelectedItems,
  setSelectedDateRange,
}) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [collapsedSections, setCollapsedSections] = useState<
    Record<string, boolean>
  >({
    MarineLife: true,
    Environment: true,
    Settings: true,
  });
  const [selectedRadio, setSelectedRadio] = useState<string>("past_7_days");

  // Define categories and items
  const categorizedItems: Record<string, string[]> = {
    Location: [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "San Francisco",
    ],
    "Age Range": ["0-18", "19-30", "31-45", "46-60", "60+"],
    "Date Selector": [
      "Past 7 days",
      "Past 14 days",
      "Past 30 days",
      "Year to date",
      "All",
    ],
  };

  // Transform into an array of items
  const items: SearchItem[] = Object.entries(categorizedItems).flatMap(
    ([category, entries]) =>
      entries.map((entry) => ({
        id: entry.toLowerCase().replace(/\s+/g, "_"),
        content: entry,
        searchableText: entry,
        category,
      }))
  );

  // Filter items based on search query
  const filteredItems = items.filter((item) =>
    item.searchableText.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group items by category
  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, SearchItem[]>);

  // Auto-expand sections when search finds an item in that section
  useEffect(() => {
    setCollapsedSections((prev) => {
      const updatedSections = { ...prev };
      Object.keys(groupedItems).forEach((section) => {
        if (groupedItems[section].length > 0) {
          updatedSections[section] = false;
        }
      });
      return updatedSections;
    });
  }, [searchQuery]);

  return (
    <PanelLeft panelResize={true} panelWidth={256}>
      <PanelLeftToolbar panelTitle={isSearching ? undefined : "Documents"}>
        {!isSearching ? (
          <>
            <Menu positioning={{ autoSize: true }}>
              <MenuTrigger disableButtonEnhancement>
                <ToolbarButton icon={<Filter20Regular />} />
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem onClick={() => setSelectedItems({})}>
                    Clear selections
                  </MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
            <ToolbarButton
              icon={<Search />}
              onClick={() => {
                setIsSearching(true);
                setTimeout(() => inputRef.current?.focus(), 0);
              }}
            />
          </>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexGrow: 1,
              width: "calc(100% + 8px)",
              margin: "0 -8px",
            }}
          >
            <Input
              ref={inputRef}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              appearance="filled-lighter"
              contentAfter={
                <Button
                  appearance="transparent"
                  icon={<Dismiss />}
                  onClick={() => {
                    setIsSearching(false);
                    setSearchQuery("");
                  }}
                  aria-label="Clear search"
                />
              }
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setIsSearching(false);
                  setSearchQuery("");
                }
              }}
              style={{ flex: 1  }}
            />
          </div>
        )}
      </PanelLeftToolbar>

      <div style={{ padding: "0 8px 8px 8px", display:'flex',flexDirection:'column', gap:'16px' }}>
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category}>
            <Body1
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
                padding: "8px",
                userSelect: "none",
                color: "var(--colorNeutralForeground4)",
              }}
              onClick={() =>
                setCollapsedSections((prev) => ({
                  ...prev,
                  [category]: !prev[category],
                }))
              }
            >
              {category}
            </Body1>

            {!collapsedSections[category] && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {category === "Date Selector" ? (
                  <RadioGroup
                    value={selectedRadio || ""}
                    onChange={(e, data) => {
                      console.log("Updating selectedDateRange to:", data.value); // Debugging Log
                      setSelectedRadio(data.value);
                      setSelectedDateRange(data.value); // ✅ Ensure this is executed
                    }}
                  >
                    {items.map((item) => (
                      <Radio
                        key={item.id}
                        value={item.id}
                        label={item.content as string}
                      />
                    ))}
                  </RadioGroup>
                ) : (
                  items.map((item) => (
                    <Checkbox
                      key={item.id}
                      label={item.content as string}
                      checked={!!selectedItems[item.id]}
                      onChange={() =>
                        setSelectedItems((prev) => ({
                          ...prev,
                          [item.id]: !prev[item.id],
                        }))
                      }
                    />
                  ))
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </PanelLeft>
  );
};

export default PanelLeftSearch;
