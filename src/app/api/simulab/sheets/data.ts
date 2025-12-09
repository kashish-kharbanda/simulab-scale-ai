/**
 * SimuLab Sheets Data Module
 * 
 * Shared data access for Google Sheets scenarios.
 * Used by both the sheets API route and the refine route directly.
 * 
 * Source of truth: https://docs.google.com/spreadsheets/d/17bd4GhtN66ekoWxff1qaGNa_SWuYPThR6zgEu215ZWQ
 */

export interface SheetScenario {
  scenario_id: string;
  protein_target: string;
  scaffold_hypothesis: string;
  smiles: string;
  pdb_id: string;
  reference_binding_affinity: number | null;
  reference_herg_flag: boolean | null;
  reference_sa_score: number | null;
  target_result: string;
  result_category: string;
}

/**
 * Hardcoded data from the public Google Sheet
 * This ensures data is always available even if Google Sheets API fails
 * 
 * Last updated: Matches public sheet at
 * https://docs.google.com/spreadsheets/d/17bd4GhtN66ekoWxff1qaGNa_SWuYPThR6zgEu215ZWQ
 */
export const SHEET_DATA: SheetScenario[] = [
  {
    scenario_id: "1",
    protein_target: "BCR-ABL",
    scaffold_hypothesis: "Pyrrolo-pyrimidine",
    smiles: "CC(=O)C1=C(N)N=C(C)N=1",
    pdb_id: "1M17",
    reference_binding_affinity: -11.5,
    reference_herg_flag: true,
    reference_sa_score: 4.5,
    target_result: "Rejected",
    result_category: "Safety Veto",
  },
  {
    scenario_id: "1",
    protein_target: "BCR-ABL",
    scaffold_hypothesis: "Pyrazolo-pyridine",
    smiles: "CC1=C(C)N=C(C)C=C1N",
    pdb_id: "1M17",
    reference_binding_affinity: -8.8,
    reference_herg_flag: false,
    reference_sa_score: 3.1,
    target_result: "WINNER",
    result_category: "Winner",
  },
  {
    scenario_id: "2",
    protein_target: "T-Kinase",
    scaffold_hypothesis: "Thiazole-Thiophene",
    smiles: "C1=CC(=CN=C1)C2=CSC=C2",
    pdb_id: "2H9T",
    reference_binding_affinity: -9.1,
    reference_herg_flag: false,
    reference_sa_score: 4.1,
    target_result: "Accepted",
    result_category: "Non-Winner",
  },
  {
    scenario_id: "2",
    protein_target: "T-Kinase",
    scaffold_hypothesis: "Triazole-Pyridine",
    smiles: "CC1=NC=NC=C1C(C)C",
    pdb_id: "2H9T",
    reference_binding_affinity: -9.5,
    reference_herg_flag: false,
    reference_sa_score: 6.5,
    target_result: "Rejected",
    result_category: "Cost Veto",
  },
  {
    scenario_id: "2",
    protein_target: "T-Kinase",
    scaffold_hypothesis: "Pyrimidine-Amide",
    smiles: "C1=NC(=CN=C1)CC(=O)N",
    pdb_id: "2H9T",
    reference_binding_affinity: -10.2,
    reference_herg_flag: false,
    reference_sa_score: 3.8,
    target_result: "WINNER",
    result_category: "Winner",
  },
  {
    scenario_id: "3",
    protein_target: "Tox-Check",
    scaffold_hypothesis: "Complex X-Ring",
    smiles: "C1C(N(C)C)C(=O)C2=CC=C12",
    pdb_id: "3V03",
    reference_binding_affinity: -7.5,
    reference_herg_flag: true,
    reference_sa_score: 7.2,
    target_result: "Rejected",
    result_category: "Safety Veto",
  },
  {
    scenario_id: "3",
    protein_target: "Tox-Check",
    scaffold_hypothesis: "Simple Y-Chain",
    smiles: "CCCC(N)C(=O)O",
    pdb_id: "3V03",
    reference_binding_affinity: -6.8,
    reference_herg_flag: false,
    reference_sa_score: 1.9,
    target_result: "Rejected",
    result_category: "Potency Fail",
  },
  {
    scenario_id: "3",
    protein_target: "Tox-Check",
    scaffold_hypothesis: "Mid-Range Z-Ring",
    smiles: "C1C(N)C(=O)C=C1",
    pdb_id: "3V03",
    reference_binding_affinity: -8.1,
    reference_herg_flag: false,
    reference_sa_score: 6.2,
    target_result: "Rejected",
    result_category: "Cost/Risk Fail",
  },
  // Scenario 4: Amyloid Beta (6 scenarios) - Updated from Google Sheet
  {
    scenario_id: "4",
    protein_target: "Amyloid Beta",
    scaffold_hypothesis: "Lipophilic Diamine Core",
    smiles: "CC1=NC(=CS1)C2=CC=C(C=C2)N(C)C",
    pdb_id: "4B5S",
    reference_binding_affinity: -11.2,
    reference_herg_flag: true,
    reference_sa_score: 4.8,
    target_result: "Rejected",
    result_category: "Safety Veto",
  },
  {
    scenario_id: "4",
    protein_target: "Amyloid Beta",
    scaffold_hypothesis: "Multi-Chiral Macrocycle",
    smiles: "C1=C(C=C(C=C1)C2=C(C)C(=O)O2)C",
    pdb_id: "4B5S",
    reference_binding_affinity: -10.9,
    reference_herg_flag: false,
    reference_sa_score: 6.9,
    target_result: "Rejected",
    result_category: "Cost Veto",
  },
  {
    scenario_id: "4",
    protein_target: "Amyloid Beta",
    scaffold_hypothesis: "Simple Benzimidazole",
    smiles: "C1=CC=C(C=C1)C(C)C(=O)O",
    pdb_id: "4B5S",
    reference_binding_affinity: -6.9,
    reference_herg_flag: false,
    reference_sa_score: 2.5,
    target_result: "Rejected",
    result_category: "Potency Fail",
  },
  {
    scenario_id: "4",
    protein_target: "Amyloid Beta",
    scaffold_hypothesis: "Piperazine Amide Analogue",
    smiles: "C1=CC(=C(C=C1)OC)C(=O)N(C)C",
    pdb_id: "4B5S",
    reference_binding_affinity: -10.7,
    reference_herg_flag: false,
    reference_sa_score: 2.2,
    target_result: "WINNER",
    result_category: "Winner",
  },
  {
    scenario_id: "4",
    protein_target: "Amyloid Beta",
    scaffold_hypothesis: "Fluorinated Poly-Aromatic Ring",
    smiles: "C1=C(C=C(C=C1)C2=NC=C(C=C2)C)C",
    pdb_id: "4B5S",
    reference_binding_affinity: -9.5,
    reference_herg_flag: false,
    reference_sa_score: 5.5,
    target_result: "Accepted",
    result_category: "Non-Winner",
  },
  {
    scenario_id: "4",
    protein_target: "Amyloid Beta",
    scaffold_hypothesis: "Small Heterocycle Analogue",
    smiles: "CC(=O)C1=CC=C(C=C1)C",
    pdb_id: "4B5S",
    reference_binding_affinity: -8.1,
    reference_herg_flag: false,
    reference_sa_score: 3.9,
    target_result: "Accepted",
    result_category: "Non-Winner",
  },
];

/**
 * Get all scenarios from the database
 */
export function getAllScenarios(): SheetScenario[] {
  return SHEET_CACHE && SHEET_CACHE.length > 0 ? SHEET_CACHE : SHEET_DATA;
}

/**
 * Get scenarios filtered by protein target (case-insensitive)
 */
export function getScenariosByProteinTarget(proteinTarget: string): SheetScenario[] {
  const targetLower = proteinTarget.toLowerCase().trim();
  const src = getAllScenarios();
  return src.filter(s => 
    s.protein_target.toLowerCase().includes(targetLower) ||
    targetLower.includes(s.protein_target.toLowerCase())
  );
}

/**
 * Get unique protein targets
 */
export function getUniqueProteinTargets(): string[] {
  const src = getAllScenarios();
  return Array.from(new Set(src.map(s => s.protein_target)));
}

/**
 * Find scenario by SMILES string
 */
export function findScenarioBySmiles(smiles: string): SheetScenario | null {
  const src = getAllScenarios();
  return src.find(s => s.smiles.trim() === smiles.trim()) || null;
}

/**
 * Find scenario by scaffold name (partial match)
 */
export function findScenarioByScaffold(scaffold: string): SheetScenario | null {
  const scaffoldLower = scaffold.toLowerCase();
  const src = getAllScenarios();
  return src.find(s => {
    const dbScaffold = s.scaffold_hypothesis.toLowerCase();
    return scaffoldLower.includes(dbScaffold) || dbScaffold.includes(scaffoldLower);
  }) || null;
}

// -----------------------------------------------------------------------------
// Best-effort live sheet loader (public CSV) with module-level cache
// -----------------------------------------------------------------------------
const SHEET_ID = process.env.SIMULAB_GOOGLE_SHEET_ID || "17bd4GhtN66ekoWxff1qaGNa_SWuYPThR6zgEu215ZWQ";
const SHEET_GID = process.env.SIMULAB_GOOGLE_SHEET_GID || "0";
let SHEET_CACHE: SheetScenario[] | null = null;

function parseFloatSafe(value: any): number | null {
  if (value === null || value === undefined || value === "") return null;
  const num = Number(value);
  return isNaN(num) ? null : num;
}

function parseBoolSafe(value: any): boolean | null {
  if (value === null || value === undefined || value === "") return null;
  const str = String(value).toLowerCase().trim();
  if (str === "yes" || str === "true" || str === "1" || str === "unsafe" || str === "veto") return true;
  if (str === "no" || str === "false" || str === "0" || str === "safe") return false;
  return null;
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

async function loadSheetCSV(): Promise<SheetScenario[]> {
  try {
    const csvUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${encodeURIComponent(SHEET_GID)}`;
    const res = await fetch(csvUrl, { method: "GET", redirect: "follow", headers: { Accept: "text/csv,text/plain,*/*" } as any });
    if (!res.ok) return [];
    const text = await res.text();
    if (!text || text.trim().startsWith("<")) return [];
    const lines = text.split("\n").filter(l => l.trim());
    if (lines.length < 2) return [];
    const headers = parseCSVLine(lines[0]);
    const findCol = (patterns: string[]) =>
      headers.findIndex(h => patterns.some(p => h.toLowerCase().includes(p.toLowerCase())));
    const colIndex = {
      scenario_id: findCol(["scenario"]),
      protein_target: findCol(["protein"]),
      scaffold_hypothesis: findCol(["scaffold", "hypothesis"]),
      smiles: findCol(["smiles"]),
      pdb_id: findCol(["pdb"]),
      binding_affinity: findCol(["affinity", "Δg", "dg", "delta g"]),
      herg_flag: findCol(["herg"]),
      sa_score: findCol(["sa score", "sa", "synthesis"]),
      target_result: findCol(["final result", "target final", "result"]),
      result_category: findCol(["category"]),
    };
    const scenarios: SheetScenario[] = [];
    for (let i = 1; i < lines.length; i++) {
      const row = parseCSVLine(lines[i]);
      if (row.length === 0 || !row.some(cell => cell.trim())) continue;
      const s: SheetScenario = {
        scenario_id: row[colIndex.scenario_id] || `Scenario_${i}`,
        protein_target: row[colIndex.protein_target] || "",
        scaffold_hypothesis: row[colIndex.scaffold_hypothesis] || "",
        smiles: row[colIndex.smiles] || "",
        pdb_id: row[colIndex.pdb_id] || "",
        reference_binding_affinity: parseFloatSafe(row[colIndex.binding_affinity]),
        reference_herg_flag: parseBoolSafe(row[colIndex.herg_flag]),
        reference_sa_score: parseFloatSafe(row[colIndex.sa_score]),
        target_result: row[colIndex.target_result] || "",
        result_category: row[colIndex.result_category] || "",
      };
      if (s.protein_target || s.smiles) scenarios.push(s);
    }
    return scenarios;
  } catch {
    return [];
  }
}

// Kick off background load; non-blocking for API callers
(async () => {
  try {
    const live = await loadSheetCSV();
    if (live.length > 0) {
      SHEET_CACHE = live;
      // eslint-disable-next-line no-console
      console.log(`[SimuLab/Sheets:data] Loaded ${live.length} rows from live sheet`);
    }
  } catch {
    // ignore
  }
})();

