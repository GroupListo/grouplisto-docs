---
sidebar_position: 3
---

# Importing Contacts

Quickly add many contacts at once by importing them.

## Import Options

GroupListo supports three import methods:

| Method | Best For |
|--------|----------|
| **VCF (vCard)** | Exporting from phone or email apps |
| **CSV** | Spreadsheet data |
| **Google Contacts** | Direct import from your Google account |

## Importing from VCF File

VCF (vCard) files are the standard format for contact exports from most phones and email applications.

### How to Import VCF

1. Go to **Import Contacts** from the sidebar
2. Select **VCF File** tab
3. Click **Upload** or drag and drop your .vcf file
4. Review the preview of contacts
5. Click **Import** to add them to your list

### Exporting VCF from Your Phone

**iPhone:**
1. Open Contacts app
2. Select contacts to export
3. Tap Share → Export as VCF

**Android:**
1. Open Contacts app
2. Menu → Export → Export to .vcf file

## Importing from CSV File

CSV files are spreadsheet files with comma-separated values.

### How to Import CSV

1. Go to **Import Contacts** from the sidebar
2. Select **CSV File** tab
3. Upload your .csv file
4. **Map the columns** - Match your CSV columns to GroupListo fields:
   - First Name
   - Last Name
   - Phone
   - Email
   - etc.
5. Review the mapping
6. Click **Import**

### CSV Column Mapping

When importing CSV, you'll see a mapping screen where you can match your columns:

| Your CSV Column | → | GroupListo Field |
|-----------------|---|------------------|
| Name | → | First Name |
| Surname | → | Last Name |
| Mobile | → | Phone |
| E-mail | → | Email |

:::tip
If your CSV has headers in the first row, they'll be detected automatically.
:::

## Importing from Google Contacts

Import contacts directly from your Google account.

### How to Import from Google

1. Go to **Import Contacts** from the sidebar
2. Click **Import from Google**
3. Sign in to your Google account (if prompted)
4. Grant GroupListo permission to read your contacts
5. Select which contacts to import
6. Click **Import**

:::note
GroupListo only requests read access to your contacts. It cannot modify your Google contacts.
:::

## After Import

### Viewing Import Results

After an import completes, you'll see:
- **Successful imports** - Number of contacts added
- **Skipped** - Contacts that already existed (duplicates)
- **Failed** - Contacts that couldn't be imported (with reasons)

### Import History

You can view past imports in **Import Logs** from the sidebar. This shows:
- Date of import
- Source (VCF, CSV, Google)
- Number of contacts imported
- Any errors that occurred

## Handling Duplicates

GroupListo checks for duplicates based on:
- Phone number
- Email address

If a duplicate is found, the contact is skipped during import.

---

**Next:** [Contact Categories](/contacts/categories)
