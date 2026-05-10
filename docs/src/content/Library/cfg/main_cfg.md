This is where you configure SilverBullet to your liking. See [[^Library/Std/Config]] for a full list of configuration options.

# Table of Contents
```space-lua
config.set("std.widgets.toc.enabled", true)

actionButton.define {
  icon = "sidebar",
  description = "Toggle Table of Contents",
  run = function()
    editor.invokeCommand("Toggle TOC in Sidepanel")
  end
}
```


# Treeview
Currently not in use
```lua
-- priority: 10

config.set {
  -- The treeview plug configuration
  treeview = {
    -- Determines where the panel is displayed:
    -- - "lhs" - left hand side
    -- - "rhs" - right hand side
    -- - "bhs" - bottom
    -- - "modal" - in a modal
    position = "lhs",

    -- Must be > 0.
    -- position = "lhs" | "rhs": determines the width of the panel.
    -- position = "modal": sets the margin around the modal window.
    -- position = "bhs": No effect
    size=0.5,

    dragAndDrop = {
      -- Set to false to disable drag-and-drop
      enabled = true,

      -- Set to false to disable the confirmation prompt shown when dragging and
      -- dropping pages that causes them to be renamed/moved.
      confirmOnRename = true
    },

    -- An array of exclusion rules that will exclude pages from being
    -- displayed in the sidebar.
    exclusions = {
      {
        -- Filter by regular expression:
        type = "regex",
        -- Regular Expression string to exclude pages from the tree
        -- Examples:
        -- - Any page that is all-caps: "^[A-Z]+$"
        -- - A specific set of pages: "^(?:CONFIG|Library|index).*$"
        -- - Any path containing Hidden (e.g. test/Hidden/page1): "Hidden"
        rule="^(?:CONFIG|Library|index).*$",
        -- Optional: set to true to negate the rule, only showing pages that match this regex.
        negate= false,
      },
      {
        -- Filter by page tags:
        type = "tags",
        tags = {"meta"},
        -- Optional: set to true to negate the rule, only showing pages that include any of the tags.
        negate = false
      }
    }
  },

}

actionButton.define {
  icon = "sidebar",
  description = "Toggle Tree View",
  run = function()
    editor.invokeCommand("Tree View: Toggle")
  end
} 
```

# Document Explorer
This seems to give a better view that the Treeview

```space-lua
-- priority: 10
config.set("explorer", {
  position = "lhs",
  homeDirName = "🏠 Home",
  goToCurrentDir = true,
  tileSize = "80px",
  enableContextMenu = true,
  listHeight = "24px",
  negativeFilter = {"Library","*.js", 'Repositories', 'run.bat'},
  treeFolderFirst = false,
  recoverAfterRefresh = true
})

actionButton.define {
  icon = "sidebar",
  description = "Toggle Document Exmplorer",
  run = function()
    editor.invokeCommand("Navigate: Toggle Document Explorer")
  end
}

```

