/*
  # Create leads table for EcoCiel

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `name` (text, not null) - Contact name
      - `phone` (text, not null) - Phone number
      - `city` (text, not null) - City in Morocco
      - `project_type` (text, not null) - Type of solar project
      - `created_at` (timestamptz) - Submission timestamp
  2. Security
    - Enable RLS on `leads` table
    - Add INSERT policy for anyone (public form submission)
    - No SELECT/UPDATE/DELETE policies (leads are managed server-side)
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  city text NOT NULL,
  project_type text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
