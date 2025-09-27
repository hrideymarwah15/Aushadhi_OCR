-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create medicines table
CREATE TABLE IF NOT EXISTS medicines (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  brand_name VARCHAR(255) NOT NULL,
  generic_name VARCHAR(255) NOT NULL,
  manufacturer VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create scan_results table
CREATE TABLE IF NOT EXISTS scan_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  extracted_text TEXT NOT NULL,
  matched_medicines JSONB NOT NULL,
  confidence_score INTEGER NOT NULL,
  is_suspicious BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user_scans table for tracking user activity
CREATE TABLE IF NOT EXISTS user_scans (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  scan_result_id UUID REFERENCES scan_results(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_medicines_brand_name ON medicines(brand_name);
CREATE INDEX IF NOT EXISTS idx_medicines_generic_name ON medicines(generic_name);
CREATE INDEX IF NOT EXISTS idx_scan_results_user_id ON scan_results(user_id);
CREATE INDEX IF NOT EXISTS idx_scan_results_created_at ON scan_results(created_at);
CREATE INDEX IF NOT EXISTS idx_user_scans_user_id ON user_scans(user_id);

-- Enable Row Level Security
ALTER TABLE medicines ENABLE ROW LEVEL SECURITY;
ALTER TABLE scan_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_scans ENABLE ROW LEVEL SECURITY;

-- Create policies for medicines table (public read access)
CREATE POLICY "Medicines are viewable by everyone" ON medicines
  FOR SELECT USING (true);

CREATE POLICY "Medicines are insertable by authenticated users" ON medicines
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Create policies for scan_results table (user can only see their own)
CREATE POLICY "Users can view their own scan results" ON scan_results
  FOR SELECT USING (auth.jwt() ->> 'sub' = user_id);

CREATE POLICY "Users can insert their own scan results" ON scan_results
  FOR INSERT WITH CHECK (auth.jwt() ->> 'sub' = user_id);

-- Create policies for user_scans table (user can only see their own)
CREATE POLICY "Users can view their own scans" ON user_scans
  FOR SELECT USING (auth.jwt() ->> 'sub' = user_id);

CREATE POLICY "Users can insert their own scans" ON user_scans
  FOR INSERT WITH CHECK (auth.jwt() ->> 'sub' = user_id);

-- Insert sample medicine data
INSERT INTO medicines (brand_name, generic_name, manufacturer) VALUES
  ('Paracetamol', 'Acetaminophen', 'ABC Pharma'),
  ('Ibuprofen', 'Ibuprofen', 'XYZ Corp'),
  ('Aspirin', 'Acetylsalicylic Acid', 'DEF Ltd'),
  ('Amoxicillin', 'Amoxicillin', 'GHI Pharma'),
  ('Metformin', 'Metformin', 'JKL Corp'),
  ('Omeprazole', 'Omeprazole', 'MNO Pharma'),
  ('Lisinopril', 'Lisinopril', 'PQR Corp'),
  ('Atorvastatin', 'Atorvastatin', 'STU Ltd'),
  ('Metoprolol', 'Metoprolol', 'VWX Pharma'),
  ('Simvastatin', 'Simvastatin', 'YZA Corp'),
  -- Counterfeit examples for testing
  ('Paracetamal', 'Acetaminophen', 'Fake Corp'),
  ('Ibuprofin', 'Ibuprofen', 'Counterfeit Ltd'),
  ('Asprin', 'Acetylsalicylic Acid', 'Fake Pharma'),
  ('Amoxcillin', 'Amoxicillin', 'Counterfeit Corp');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_medicines_updated_at
  BEFORE UPDATE ON medicines
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();