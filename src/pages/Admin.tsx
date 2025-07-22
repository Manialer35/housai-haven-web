import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: string;
  priority: string;
  created_at: string;
  updated_at: string;
}

const Admin = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [priorityFilter, setPriorityFilter] = useState<string>("all");
  const { toast } = useToast();

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const { data, error } = await supabase
        .from("inquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setInquiries(data || []);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      toast({
        title: "Error",
        description: "Failed to fetch inquiries",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateInquiryStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from("inquiries")
        .update({ status })
        .eq("id", id);

      if (error) throw error;

      setInquiries(prev => 
        prev.map(inquiry => 
          inquiry.id === id ? { ...inquiry, status } : inquiry
        )
      );

      toast({
        title: "Success",
        description: "Inquiry status updated successfully",
      });
    } catch (error) {
      console.error("Error updating inquiry status:", error);
      toast({
        title: "Error",
        description: "Failed to update inquiry status",
        variant: "destructive",
      });
    }
  };

  const updateInquiryPriority = async (id: string, priority: string) => {
    try {
      const { error } = await supabase
        .from("inquiries")
        .update({ priority })
        .eq("id", id);

      if (error) throw error;

      setInquiries(prev => 
        prev.map(inquiry => 
          inquiry.id === id ? { ...inquiry, priority } : inquiry
        )
      );

      toast({
        title: "Success",
        description: "Inquiry priority updated successfully",
      });
    } catch (error) {
      console.error("Error updating inquiry priority:", error);
      toast({
        title: "Error",
        description: "Failed to update inquiry priority",
        variant: "destructive",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new": return "bg-blue-500";
      case "in_progress": return "bg-yellow-500";
      case "resolved": return "bg-green-500";
      case "closed": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent": return "bg-red-500";
      case "high": return "bg-orange-500";
      case "normal": return "bg-blue-500";
      case "low": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const filteredInquiries = inquiries.filter(inquiry => {
    const statusMatch = statusFilter === "all" || inquiry.status === statusFilter;
    const priorityMatch = priorityFilter === "all" || inquiry.priority === priorityFilter;
    return statusMatch && priorityMatch;
  });

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading inquiries...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Inquiry Management Dashboard</h1>
        <p className="text-muted-foreground">
          Manage all contact form submissions and inquiries from your website
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Inquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inquiries.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">New</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {inquiries.filter(i => i.status === "new").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {inquiries.filter(i => i.status === "in_progress").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Resolved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {inquiries.filter(i => i.status === "resolved").length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="in_progress">In Progress</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>

        <Select value={priorityFilter} onValueChange={setPriorityFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priorities</SelectItem>
            <SelectItem value="urgent">Urgent</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="normal">Normal</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={fetchInquiries} variant="outline">
          Refresh
        </Button>
      </div>

      {/* Inquiries List */}
      <div className="space-y-4">
        {filteredInquiries.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center">
              <p className="text-muted-foreground">No inquiries found matching your filters.</p>
            </CardContent>
          </Card>
        ) : (
          filteredInquiries.map((inquiry) => (
            <Card key={inquiry.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{inquiry.subject}</CardTitle>
                    <CardDescription>
                      From: {inquiry.name} ({inquiry.email})
                      {inquiry.phone && ` • Phone: ${inquiry.phone}`}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={`${getStatusColor(inquiry.status)} text-white`}>
                      {inquiry.status.replace("_", " ")}
                    </Badge>
                    <Badge className={`${getPriorityColor(inquiry.priority)} text-white`}>
                      {inquiry.priority}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Message:</h4>
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                      {inquiry.message}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm text-muted-foreground">
                      Created: {format(new Date(inquiry.created_at), "PPp")}
                    </div>
                    
                    <div className="flex gap-2">
                      <Select
                        value={inquiry.status}
                        onValueChange={(value) => updateInquiryStatus(inquiry.id, value)}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="in_progress">In Progress</SelectItem>
                          <SelectItem value="resolved">Resolved</SelectItem>
                          <SelectItem value="closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select
                        value={inquiry.priority}
                        onValueChange={(value) => updateInquiryPriority(inquiry.id, value)}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="urgent">Urgent</SelectItem>
                        </SelectContent>
                      </Select>

                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(`mailto:${inquiry.email}?subject=Re: ${inquiry.subject}`)}
                      >
                        Reply via Email
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Admin;