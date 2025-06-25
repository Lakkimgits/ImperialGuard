import React, { useEffect, useState } from 'react';
import '../styling/ranks.css';

const groupId = 7380854; // group ID

// Use the full backend URL for GitHub Pages!
const API_BASE = 'https://roblox-proxy-vercel-two.vercel.app';

const Ranks = () => {
  const [groupData, setGroupData] = useState(null);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [thumbnails, setThumbnails] = useState({});

  useEffect(() => {
    const fetchGroupData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_BASE}/api/roblox/group?groupId=${groupId}`);
        if (!response.ok) throw new Error('Failed to fetch group data');
        const data = await response.json();
        setGroupData(data);
        setError(null);
      } catch (err) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchGroupData();
  }, []);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/roblox/members?groupId=${groupId}&limit=100`);
        if (!response.ok) throw new Error('Failed to fetch group members');
        const data = await response.json();
        setMembers(data.data || []);
      } catch (err) {
        setError(err.message || 'Unknown error');
      }
    };
    fetchMembers();
  }, []);

  useEffect(() => {
    const fetchThumbnails = async () => {
      if (members.length === 0) return;

      const filtered = members.filter(member =>
        member.role.rank < 9 &&
        member.user.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const userIds = filtered.map(m => m.user.userId);
      if (userIds.length === 0) {
        setThumbnails({});
        return;
      }
      try {
        const url =
          `${API_BASE}/api/thumbnails?userIds=${userIds.join(",")}&size=100x100&format=Png&isCircular=true`;
        const res = await fetch(url);
        const data = await res.json();
        const thumbObj = {};
        for (const thumb of data.data || []) {
          thumbObj[thumb.targetId] = thumb.imageUrl;
        }
        setThumbnails(thumbObj);
      } catch {
        setThumbnails({});
      }
    };
    fetchThumbnails();
  }, [members, searchTerm]);

  const filteredMembers = members.filter(member =>
    member.role.rank < 10 &&
    member.user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const membersByRank = {};
  filteredMembers.forEach(member => {
    const rank = member.role.rank;
    if (!membersByRank[rank]) {
      membersByRank[rank] = {
        rankName: member.role.name,
        rankNumber: rank,
        members: []
      };
    }
    membersByRank[rank].members.push(member);
  });

  const sortedRanks = Object.values(membersByRank).sort(
    (a, b) => b.rankNumber - a.rankNumber
  );

  return (
    <div className="ranks-root">
      <div className="ranks-container">
        <h2 className="ranks-title">
          Roblox Group
        </h2>
        <p className="ranks-membercount">
          <strong>Number of IGs:</strong>{" "}
          {loading
            ? "Loading..."
            : error
            ? "N/A"
            : groupData?.memberCount ?? "N/A"
          }
        </p>

        {loading && <p className="ranks-loading">Loading group data...</p>}
        {error && <p className="ranks-error">{error}</p>}

        <h3 className="ranks-member-title">Group Members</h3>
        <input
          type="text"
          placeholder="Search members…"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="ranks-search"
        />

        {sortedRanks.length === 0 && !loading &&
          <p className="ranks-nomembers">No members found.</p>
        }

        {sortedRanks.map(rankGroup => (
          <div key={rankGroup.rankNumber} className="ranks-rankgroup">
            <h4 className="ranks-rankgroup-title">
              {rankGroup.rankName}
            </h4>
            <ul className="ranks-memberlist">
              {rankGroup.members.map(member => (
                <li key={member.user.userId} className="ranks-memberitem">
                  <img
                    src={thumbnails[member.user.userId] || "https://tr.rbxcdn.com/1e6e116fc848c7a7a8e0c6d7bfb6c8a2/100/100/AvatarHeadshot/Png"}
                    alt={member.user.username}
                    className="ranks-member-avatar"
                  />
                  <div>
                    <span className="ranks-member-username">
                      {member.user.username}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ranks;