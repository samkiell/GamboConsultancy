import { getSql, initDb } from './db';
import fs from 'fs';
import path from 'path';

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  service?: string;
  message: string;
  status: 'New' | 'Contacted' | 'In Progress' | 'Completed';
  createdAt: string;
}

export interface IssuedCertificate {
  id: string;
  traineeName: string;
  department: string;
  issueDate: string;
  createdAt: string;
  status: string;
}

export interface MasterclassRegistration {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  occupation?: string;
  organization?: string;
  topicInterest?: string;
  expectation?: string;
  state?: string;
  county?: string;
  country?: string;
  age?: string;
  status: 'Confirmed' | 'Attended' | 'Cancelled';
  createdAt: string;
}

// Fallback file paths if database is temporarily unavailable
const DATA_DIR = path.join(process.cwd(), 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');
const CERTIFICATES_FILE = path.join(DATA_DIR, 'certificates.json');
const MASTERCLASS_FILE = path.join(DATA_DIR, 'masterclass.json');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

// ==========================================
// INQUIRIES (NEON POSTGRESQL)
// ==========================================
export async function getInquiries(): Promise<Inquiry[]> {
  if (process.env.DATABASE_URL) {
    try {
      await initDb();
      const sql = getSql();
      const rows = await sql`
        SELECT id, name, email, phone, department, service, message, status, created_at
        FROM inquiries
        ORDER BY created_at DESC
      `;

      return rows.map((row: any) => ({
        id: row.id,
        name: row.name,
        email: row.email,
        phone: row.phone,
        department: row.department,
        service: row.service,
        message: row.message,
        status: row.status as Inquiry['status'],
        createdAt: row.created_at instanceof Date ? row.created_at.toISOString() : String(row.created_at),
      }));
    } catch (dbError) {
      console.error('Neon DB query error in getInquiries, using file fallback:', dbError);
    }
  }

  // File-based fallback
  ensureDataDir();
  if (!fs.existsSync(INQUIRIES_FILE)) return [];
  try {
    const raw = fs.readFileSync(INQUIRIES_FILE, 'utf-8');
    return JSON.parse(raw) || [];
  } catch (error) {
    return [];
  }
}

export async function saveInquiry(data: {
  name: string;
  email: string;
  phone: string;
  department: string;
  service?: string;
  message: string;
}): Promise<Inquiry> {
  const newId = `INQ-${Date.now().toString().slice(-6)}`;
  const nowIso = new Date().toISOString();

  if (process.env.DATABASE_URL) {
    try {
      await initDb();
      const sql = getSql();
      const inserted = await sql`
        INSERT INTO inquiries (id, name, email, phone, department, service, message, status)
        VALUES (
          ${newId},
          ${data.name},
          ${data.email},
          ${data.phone},
          ${data.department || 'General Inquiry'},
          ${data.service || 'Consultation Request'},
          ${data.message},
          'New'
        )
        RETURNING *
      `;

      const row = inserted[0];
      return {
        id: row.id,
        name: row.name,
        email: row.email,
        phone: row.phone,
        department: row.department,
        service: row.service,
        message: row.message,
        status: row.status as Inquiry['status'],
        createdAt: row.created_at instanceof Date ? row.created_at.toISOString() : nowIso,
      };
    } catch (dbError) {
      console.error('Neon DB insert error in saveInquiry, writing to file fallback:', dbError);
    }
  }

  // File fallback
  ensureDataDir();
  const inquiries = await getInquiries();
  const newInquiry: Inquiry = {
    id: newId,
    name: data.name,
    email: data.email,
    phone: data.phone,
    department: data.department || 'General Inquiry',
    service: data.service || 'Consultation Request',
    message: data.message,
    status: 'New',
    createdAt: nowIso,
  };

  inquiries.unshift(newInquiry);
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), 'utf-8');
  return newInquiry;
}

export async function updateInquiryStatus(
  id: string,
  status: Inquiry['status']
): Promise<Inquiry | null> {
  if (process.env.DATABASE_URL) {
    try {
      await initDb();
      const sql = getSql();
      const updated = await sql`
        UPDATE inquiries
        SET status = ${status}
        WHERE id = ${id}
        RETURNING *
      `;

      if (updated.length > 0) {
        const row = updated[0];
        return {
          id: row.id,
          name: row.name,
          email: row.email,
          phone: row.phone,
          department: row.department,
          service: row.service,
          message: row.message,
          status: row.status as Inquiry['status'],
          createdAt: row.created_at instanceof Date ? row.created_at.toISOString() : String(row.created_at),
        };
      }
      return null;
    } catch (dbError) {
      console.error('Neon DB update error in updateInquiryStatus, updating file fallback:', dbError);
    }
  }

  // File fallback
  ensureDataDir();
  const inquiries = await getInquiries();
  const index = inquiries.findIndex((i) => i.id === id);
  if (index === -1) return null;

  inquiries[index].status = status;
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), 'utf-8');
  return inquiries[index];
}

// ==========================================
// CERTIFICATES (NEON POSTGRESQL)
// ==========================================
export async function getCertificates(): Promise<IssuedCertificate[]> {
  if (process.env.DATABASE_URL) {
    try {
      await initDb();
      const sql = getSql();
      const rows = await sql`
        SELECT id, trainee_name, department, issue_date, status, created_at
        FROM certificates
        ORDER BY created_at DESC
      `;

      return rows.map((row: any) => ({
        id: row.id,
        traineeName: row.trainee_name,
        department: row.department,
        issueDate: row.issue_date,
        status: row.status,
        createdAt: row.created_at instanceof Date ? row.created_at.toISOString() : String(row.created_at),
      }));
    } catch (dbError) {
      console.error('Neon DB query error in getCertificates, using file fallback:', dbError);
    }
  }

  // File fallback
  ensureDataDir();
  if (!fs.existsSync(CERTIFICATES_FILE)) return [];
  try {
    const raw = fs.readFileSync(CERTIFICATES_FILE, 'utf-8');
    return JSON.parse(raw) || [];
  } catch (error) {
    return [];
  }
}

export async function saveCertificate(data: {
  traineeName: string;
  department?: string;
}): Promise<IssuedCertificate> {
  const currentYear = new Date().getFullYear();
  const nowIso = new Date().toISOString();
  const today = nowIso.split('T')[0];

  if (process.env.DATABASE_URL) {
    try {
      await initDb();
      const sql = getSql();
      
      const countRes = await sql`SELECT count(*) FROM certificates`;
      const nextNum = Number(countRes[0].count) + 1;
      const certId = `CERT-${currentYear}-${String(nextNum).padStart(4, '0')}`;

      const inserted = await sql`
        INSERT INTO certificates (id, trainee_name, department, issue_date, status)
        VALUES (
          ${certId},
          ${data.traineeName},
          ${data.department || 'General Certification'},
          ${today},
          'Active'
        )
        RETURNING *
      `;

      const row = inserted[0];
      return {
        id: row.id,
        traineeName: row.trainee_name,
        department: row.department,
        issueDate: row.issue_date,
        status: row.status,
        createdAt: row.created_at instanceof Date ? row.created_at.toISOString() : nowIso,
      };
    } catch (dbError) {
      console.error('Neon DB insert error in saveCertificate, writing to file fallback:', dbError);
    }
  }

  // File fallback
  ensureDataDir();
  const certs = await getCertificates();
  const certId = `CERT-${currentYear}-${String(certs.length + 1).padStart(4, '0')}`;
  const newCert: IssuedCertificate = {
    id: certId,
    traineeName: data.traineeName,
    department: data.department || 'General Certification',
    issueDate: today,
    createdAt: nowIso,
    status: 'Active',
  };

  certs.unshift(newCert);
  fs.writeFileSync(CERTIFICATES_FILE, JSON.stringify(certs, null, 2), 'utf-8');
  return newCert;
}

// ==========================================
// MASTERCLASS REGISTRATIONS (NEON POSTGRESQL)
// ==========================================
export async function getMasterclassRegistrations(): Promise<MasterclassRegistration[]> {
  if (process.env.DATABASE_URL) {
    try {
      await initDb();
      const sql = getSql();
      const rows = await sql`
        SELECT id, full_name, email, phone, occupation, organization, topic_interest, expectation, state, county, country, age, status, created_at
        FROM masterclass_registrations
        ORDER BY created_at DESC
      `;

      return rows.map((row: any) => ({
        id: row.id,
        fullName: row.full_name,
        email: row.email,
        phone: row.phone,
        occupation: row.occupation || '',
        organization: row.organization || '',
        topicInterest: row.topic_interest || '',
        expectation: row.expectation || '',
        state: row.state || '',
        county: row.county || '',
        country: row.country || row.county || '',
        age: row.age || '',
        status: row.status as MasterclassRegistration['status'],
        createdAt: row.created_at instanceof Date ? row.created_at.toISOString() : String(row.created_at),
      }));
    } catch (dbError) {
      console.error('Neon DB query error in getMasterclassRegistrations:', dbError);
    }
  }

  // File fallback
  ensureDataDir();
  if (!fs.existsSync(MASTERCLASS_FILE)) return [];
  try {
    const raw = fs.readFileSync(MASTERCLASS_FILE, 'utf-8');
    return JSON.parse(raw) || [];
  } catch (error) {
    return [];
  }
}

export async function saveMasterclassRegistration(data: {
  fullName: string;
  email: string;
  phone: string;
  occupation?: string;
  organization?: string;
  topicInterest?: string;
  expectation?: string;
  state?: string;
  county?: string;
  country?: string;
  age?: string;
}): Promise<MasterclassRegistration> {
  const newId = `MCR-${Date.now().toString().slice(-6)}`;
  const nowIso = new Date().toISOString();

  if (process.env.DATABASE_URL) {
    try {
      await initDb();
      const sql = getSql();
      const countryVal = data.country || data.county || null;
      const countyVal = data.county || data.country || null;
      const inserted = await sql`
        INSERT INTO masterclass_registrations (
          id, full_name, email, phone, occupation, organization, topic_interest, expectation, state, county, country, age, status
        )
        VALUES (
          ${newId},
          ${data.fullName},
          ${data.email},
          ${data.phone},
          ${data.occupation || null},
          ${data.organization || null},
          ${data.topicInterest || null},
          ${data.expectation || null},
          ${data.state || null},
          ${countyVal},
          ${countryVal},
          ${data.age || null},
          'Confirmed'
        )
        RETURNING *
      `;

      const row = inserted[0];
      return {
        id: row.id,
        fullName: row.full_name,
        email: row.email,
        phone: row.phone,
        occupation: row.occupation || '',
        organization: row.organization || '',
        topicInterest: row.topic_interest || '',
        expectation: row.expectation || '',
        state: row.state || '',
        county: row.county || '',
        country: row.country || row.county || '',
        age: row.age || '',
        status: row.status as MasterclassRegistration['status'],
        createdAt: row.created_at instanceof Date ? row.created_at.toISOString() : nowIso,
      };
    } catch (dbError) {
      console.error('Neon DB insert error in saveMasterclassRegistration:', dbError);
    }
  }

  // File fallback
  ensureDataDir();
  const registrations = await getMasterclassRegistrations();
  const newReg: MasterclassRegistration = {
    id: newId,
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    occupation: data.occupation || '',
    organization: data.organization || '',
    topicInterest: data.topicInterest || '',
    expectation: data.expectation || '',
    state: data.state || '',
    county: data.county || '',
    country: data.country || data.county || '',
    age: data.age || '',
    status: 'Confirmed',
    createdAt: nowIso,
  };

  registrations.unshift(newReg);
  fs.writeFileSync(MASTERCLASS_FILE, JSON.stringify(registrations, null, 2), 'utf-8');
  return newReg;
}

export async function updateMasterclassStatus(
  id: string,
  status: MasterclassRegistration['status']
): Promise<MasterclassRegistration | null> {
  if (process.env.DATABASE_URL) {
    try {
      await initDb();
      const sql = getSql();
      const updated = await sql`
        UPDATE masterclass_registrations
        SET status = ${status}
        WHERE id = ${id}
        RETURNING *
      `;

      if (updated.length > 0) {
        const row = updated[0];
        return {
          id: row.id,
          fullName: row.full_name,
          email: row.email,
          phone: row.phone,
          occupation: row.occupation || '',
          organization: row.organization || '',
          topicInterest: row.topic_interest || '',
          expectation: row.expectation || '',
          state: row.state || '',
          county: row.county || '',
          country: row.country || row.county || '',
          age: row.age || '',
          status: row.status as MasterclassRegistration['status'],
          createdAt: row.created_at instanceof Date ? row.created_at.toISOString() : String(row.created_at),
        };
      }
      return null;
    } catch (dbError) {
      console.error('Neon DB update error in updateMasterclassStatus:', dbError);
    }
  }

  // File fallback
  ensureDataDir();
  const regs = await getMasterclassRegistrations();
  const index = regs.findIndex((r) => r.id === id);
  if (index === -1) return null;

  regs[index].status = status;
  fs.writeFileSync(MASTERCLASS_FILE, JSON.stringify(regs, null, 2), 'utf-8');
  return regs[index];
}
